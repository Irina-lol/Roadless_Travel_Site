import { useState } from "react";
import styles from './Calculator.module.css';

const Calculator = ({ onCalculate, onClose }) => {
  const [formData, setFormData] = useState({
    serviceType: 'tourist',
    distance: '',
    hours: '',
    passengers: 1,
    hasCargo: false,
    cargoWeight: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(calculatePrice(formData));
  };

  const calculatePrice = (data) => {
    let basePrice = 0;

    switch (data.serviceType) {
      case 'tourist':
        basePrice = 2000;
        if (data.distance > 50) basePrice += (data.distance - 50) * 30;
        break;
      case 'cargo':
        basePrice = 1500 * (parseInt(data.hours) || 1);
        if (data.cargoWeight > 100) basePrice *= 1.2;
        break;
      case 'shift':
        basePrice = 3000 + (parseInt(data.passengers) * 500);
        break;
      default:
        basePrice = 2000;
    }

    return Math.max(basePrice, 1500);
  };

  return (
    <div className={styles.calculator}>
      <h2>Расчет стоимости заброски</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Тип услуги</label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleInputChange}
            className={styles.select}
          >
            <option value="tourist">Заброска туристов</option>
            <option value="cargo">Грузоперевозки</option>
            <option value="shift">Вахтовые перевозки</option>
          </select>
        </div>

        {formData.serviceType === 'tourist' && (
          <div className={styles.formGroup}>
            <label>Расстояние (км):</label>
            <input
              type="number"
              name="distance"
              value={formData.distance}
              onChange={handleInputChange}
              placeholder="Введите расстояние"
              className={styles.input}
              min="1"
            />
          </div>
        )}

        {formData.serviceType === 'cargo' && (
          <>
            <div className={styles.formGroup}>
              <label>Часы работы:</label>
              <input
                type="number"
                name="hours"
                value={formData.hours}
                onChange={handleInputChange}
                placeholder="Количество часов"
                className={styles.input}
                min="1"
              />
            </div>
            <div className={styles.formGroup}>
              <label>
                <input
                  type="checkbox"
                  name="hasCargo"
                  checked={formData.hasCargo}
                  onChange={handleInputChange}
                  className={styles.checkbox}
                />
                Объемный или тяжелый груз
              </label>
            </div>
          </>
        )}

        {formData.serviceType === 'shift' && (
          <div className={styles.formGroup}>
            <label>Количество пассажиров:</label>
            <input
              type="number"
              name="passengers"
              value={formData.passengers}
              onChange={handleInputChange}
              className={styles.input}
              min="1"
              max="10"
            />
          </div>
        )}

        <div className={styles.buttonGroup}>
          <button type="button" onClick={onClose} className={styles.secondaryButton}>
            Отмена
          </button>
          <button type="submit" className={styles.primaryButton}>
            Рассчитать стоимость
          </button>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
