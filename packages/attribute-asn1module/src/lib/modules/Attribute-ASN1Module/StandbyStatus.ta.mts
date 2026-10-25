/* eslint-disable */
import {
    type INTEGER,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StandbyStatus
 * @description
 * 
 * Role of a redundant resource: hot standby, cold standby, or currently
 * providing service. MATCHES FOR EQUALITY. `{smi2AttributeID 37}`. ITU-T Rec.
 * X.721 (02/92) §10.7.2.7; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StandbyStatus  ::=  INTEGER {hotStandby(0), coldStandby(1), providingService(2)}
 * ```
 */
export
type StandbyStatus = INTEGER;

/**
 * @summary StandbyStatus_hotStandby
 * @description
 *
 * Configured to take over immediately. ITU-T Rec. X.721 (02/92) §10.7.2.7;
 * ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.4.
 *
 * @constant
 * @type {number}
 */
export
const StandbyStatus_hotStandby: 0 = 0 satisfies StandbyStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StandbyStatus_hotStandby
 * @description
 *
 * Configured to take over immediately. ITU-T Rec. X.721 (02/92) §10.7.2.7;
 * ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.4.
 *
 * @constant
 * @type {number}
 */
export
const hotStandby: 0 = StandbyStatus_hotStandby; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StandbyStatus_coldStandby
 * @description
 *
 * Cannot take over without additional action. ITU-T Rec. X.721 (02/92)
 * §10.7.2.7; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.4.
 *
 * @constant
 * @type {number}
 */
export
const StandbyStatus_coldStandby: 1 = 1 satisfies StandbyStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StandbyStatus_coldStandby
 * @description
 *
 * Cannot take over without additional action. ITU-T Rec. X.721 (02/92)
 * §10.7.2.7; ITU-T Rec. X.731 | ISO/IEC 10164-2 §7.2.4.
 *
 * @constant
 * @type {number}
 */
export
const coldStandby: 1 = StandbyStatus_coldStandby; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StandbyStatus_providingService
 * @description
 *
 * Currently providing service. ITU-T Rec. X.721 (02/92) §10.7.2.7; ITU-T Rec.
 * X.731 | ISO/IEC 10164-2 §7.2.4.
 *
 * @constant
 * @type {number}
 */
export
const StandbyStatus_providingService: 2 = 2 satisfies StandbyStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StandbyStatus_providingService
 * @description
 *
 * Currently providing service. ITU-T Rec. X.721 (02/92) §10.7.2.7; ITU-T Rec.
 * X.731 | ISO/IEC 10164-2 §7.2.4.
 *
 * @constant
 * @type {number}
 */
export
const providingService: 2 = StandbyStatus_providingService; /* SHORT_NAMED_INTEGER_VALUE */


export const _decode_StandbyStatus: $.ASN1Decoder<INTEGER> = $._decodeInteger;


export const _encode_StandbyStatus: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
