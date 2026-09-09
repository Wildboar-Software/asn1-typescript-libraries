/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ENUMERATED, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary AuditoryApparatusList_Item_auditoryApparatusType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuditoryApparatusList_Item_auditoryApparatusType ::= ENUMERATED {
 *     speakerphone (0),
 *     handset (1),
 *     headset (2),
 *     speakerOnlyPhone (3),
 *     other (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AuditoryApparatusList_Item_auditoryApparatusType {
    speakerphone = 0,
    handset = 1,
    headset = 2,
    speakerOnlyPhone = 3,
    other = 4,
}

/**
 * @summary AuditoryApparatusList_Item_auditoryApparatusType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuditoryApparatusList_Item_auditoryApparatusType ::= ENUMERATED {
 *     speakerphone (0),
 *     handset (1),
 *     headset (2),
 *     speakerOnlyPhone (3),
 *     other (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AuditoryApparatusList_Item_auditoryApparatusType = _enum_for_AuditoryApparatusList_Item_auditoryApparatusType;

/**
 * @summary AuditoryApparatusList_Item_auditoryApparatusType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuditoryApparatusList_Item_auditoryApparatusType ::= ENUMERATED {
 *     speakerphone (0),
 *     handset (1),
 *     headset (2),
 *     speakerOnlyPhone (3),
 *     other (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AuditoryApparatusList_Item_auditoryApparatusType = _enum_for_AuditoryApparatusList_Item_auditoryApparatusType;

/**
 * @summary AuditoryApparatusList_Item_auditoryApparatusType_speakerphone
 * @constant
 * @type {number}
 */
export
const AuditoryApparatusList_Item_auditoryApparatusType_speakerphone: AuditoryApparatusList_Item_auditoryApparatusType = AuditoryApparatusList_Item_auditoryApparatusType.speakerphone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speakerphone
 * @constant
 * @type {number}
 */
export
const speakerphone: AuditoryApparatusList_Item_auditoryApparatusType = AuditoryApparatusList_Item_auditoryApparatusType.speakerphone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuditoryApparatusList_Item_auditoryApparatusType_handset
 * @constant
 * @type {number}
 */
export
const AuditoryApparatusList_Item_auditoryApparatusType_handset: AuditoryApparatusList_Item_auditoryApparatusType = AuditoryApparatusList_Item_auditoryApparatusType.handset; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handset
 * @constant
 * @type {number}
 */
export
const handset: AuditoryApparatusList_Item_auditoryApparatusType = AuditoryApparatusList_Item_auditoryApparatusType.handset; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuditoryApparatusList_Item_auditoryApparatusType_headset
 * @constant
 * @type {number}
 */
export
const AuditoryApparatusList_Item_auditoryApparatusType_headset: AuditoryApparatusList_Item_auditoryApparatusType = AuditoryApparatusList_Item_auditoryApparatusType.headset; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary headset
 * @constant
 * @type {number}
 */
export
const headset: AuditoryApparatusList_Item_auditoryApparatusType = AuditoryApparatusList_Item_auditoryApparatusType.headset; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuditoryApparatusList_Item_auditoryApparatusType_speakerOnlyPhone
 * @constant
 * @type {number}
 */
export
const AuditoryApparatusList_Item_auditoryApparatusType_speakerOnlyPhone: AuditoryApparatusList_Item_auditoryApparatusType = AuditoryApparatusList_Item_auditoryApparatusType.speakerOnlyPhone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary speakerOnlyPhone
 * @constant
 * @type {number}
 */
export
const speakerOnlyPhone: AuditoryApparatusList_Item_auditoryApparatusType = AuditoryApparatusList_Item_auditoryApparatusType.speakerOnlyPhone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AuditoryApparatusList_Item_auditoryApparatusType_other
 * @constant
 * @type {number}
 */
export
const AuditoryApparatusList_Item_auditoryApparatusType_other: AuditoryApparatusList_Item_auditoryApparatusType = AuditoryApparatusList_Item_auditoryApparatusType.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: AuditoryApparatusList_Item_auditoryApparatusType = AuditoryApparatusList_Item_auditoryApparatusType.other; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AuditoryApparatusList_Item_auditoryApparatusType: $.ASN1Decoder<AuditoryApparatusList_Item_auditoryApparatusType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuditoryApparatusList_Item_auditoryApparatusType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuditoryApparatusList_Item_auditoryApparatusType (el: _Element): AuditoryApparatusList_Item_auditoryApparatusType {
    if (!_cached_decoder_for_AuditoryApparatusList_Item_auditoryApparatusType) { _cached_decoder_for_AuditoryApparatusList_Item_auditoryApparatusType = $._decodeEnumerated; }
    return _cached_decoder_for_AuditoryApparatusList_Item_auditoryApparatusType(el);
}

let _cached_encoder_for_AuditoryApparatusList_Item_auditoryApparatusType: $.ASN1Encoder<AuditoryApparatusList_Item_auditoryApparatusType> | null = null;

/**
 * @summary Encodes a(n) AuditoryApparatusList_Item_auditoryApparatusType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuditoryApparatusList_Item_auditoryApparatusType, encoded as an ASN.1 Element.
 */
export
function _encode_AuditoryApparatusList_Item_auditoryApparatusType (value: AuditoryApparatusList_Item_auditoryApparatusType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuditoryApparatusList_Item_auditoryApparatusType) { _cached_encoder_for_AuditoryApparatusList_Item_auditoryApparatusType = $._encodeEnumerated; }
    return _cached_encoder_for_AuditoryApparatusList_Item_auditoryApparatusType(value, elGetter);
}


/* eslint-enable */
