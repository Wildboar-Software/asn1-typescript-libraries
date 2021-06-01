/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta';
export {
    UniversalOrBMPString,
    _decode_UniversalOrBMPString,
    _encode_UniversalOrBMPString,
} from '../MTSAbstractService/UniversalOrBMPString.ta';
import { ub_domain_defined_attribute_type_length } from '../MTSUpperBounds/ub-domain-defined-attribute-type-length.va';
export { ub_domain_defined_attribute_type_length } from '../MTSUpperBounds/ub-domain-defined-attribute-type-length.va';

/* START_OF_SYMBOL_DEFINITION ORAddressFilter_attribute_type */
/**
 * @summary ORAddressFilter_attribute_type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ORAddressFilter-attribute-type ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type ORAddressFilter_attribute_type =
    | { standard_attribute: INTEGER } /* CHOICE_ALT_ROOT */
    | { domain_defined_attribute: UniversalOrBMPString } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ORAddressFilter_attribute_type */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ORAddressFilter_attribute_type */
let _cached_decoder_for_ORAddressFilter_attribute_type: $.ASN1Decoder<ORAddressFilter_attribute_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ORAddressFilter_attribute_type */

/* START_OF_SYMBOL_DEFINITION _decode_ORAddressFilter_attribute_type */
/**
 * @summary Decodes an ASN.1 element into a(n) ORAddressFilter_attribute_type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ORAddressFilter_attribute_type} The decoded data structure.
 */
export function _decode_ORAddressFilter_attribute_type(el: _Element) {
    if (!_cached_decoder_for_ORAddressFilter_attribute_type) {
        _cached_decoder_for_ORAddressFilter_attribute_type = $._decode_inextensible_choice<ORAddressFilter_attribute_type>(
            {
                'UNIVERSAL 2': ['standard_attribute', $._decodeInteger],
                'UNIVERSAL 17': [
                    'domain_defined_attribute',
                    _decode_UniversalOrBMPString,
                ],
            }
        );
    }
    return _cached_decoder_for_ORAddressFilter_attribute_type(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ORAddressFilter_attribute_type */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ORAddressFilter_attribute_type */
let _cached_encoder_for_ORAddressFilter_attribute_type: $.ASN1Encoder<ORAddressFilter_attribute_type> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ORAddressFilter_attribute_type */

/* START_OF_SYMBOL_DEFINITION _encode_ORAddressFilter_attribute_type */
/**
 * @summary Encodes a(n) ORAddressFilter_attribute_type into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ORAddressFilter_attribute_type, encoded as an ASN.1 Element.
 */
export function _encode_ORAddressFilter_attribute_type(
    value: ORAddressFilter_attribute_type,
    elGetter: $.ASN1Encoder<ORAddressFilter_attribute_type>
) {
    if (!_cached_encoder_for_ORAddressFilter_attribute_type) {
        _cached_encoder_for_ORAddressFilter_attribute_type = $._encode_choice<ORAddressFilter_attribute_type>(
            {
                standard_attribute: $._encodeInteger,
                domain_defined_attribute: _encode_UniversalOrBMPString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_ORAddressFilter_attribute_type(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ORAddressFilter_attribute_type */

/* eslint-enable */
