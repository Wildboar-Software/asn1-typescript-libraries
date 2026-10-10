/**
 * @packageDocumentation
 *
 * Charging common data types from
 * [ETSI ES 201 296 V1.3.1](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf)
 * (`Tariffing-Data-Types`). Import from `@wildboar/charging`. The
 * per-module subpath `@wildboar/charging/Tariffing-Data-Types` is also
 * available.
 *
 * The module is the application data of the ISUP APM Charging ASE
 * (application context identifier "charging ASE", value 3), encoded
 * with the Basic Encoding Rules. The same types are the common data
 * types for INAP charging operations. A message is a
 * {@link ChargingMessageType}: tariff (`crgt`), add-on charge
 * (`aocrg`), acknowledgement (`crga`), start, or stop.
 *
 * The short named bit `non_cyclicTariff` collides between
 * `TariffCurrencyFormat` and `TariffPulseFormat`. Use the long forms
 * `TariffCurrencyFormat_tariffControlIndicators_non_cyclicTariff` and
 * `TariffPulseFormat_tariffControlIndicators_non_cyclicTariff`.
 */
export * from "./lib/modules/Tariffing-Data-Types/index.mjs";
