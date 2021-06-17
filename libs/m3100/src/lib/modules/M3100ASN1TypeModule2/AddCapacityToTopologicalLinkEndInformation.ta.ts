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
    RequestedPointCapacity,
    _decode_RequestedPointCapacity,
    _encode_RequestedPointCapacity,
} from '../M3100ASN1TypeModule2/RequestedPointCapacity.ta';
export {
    RequestedPointCapacity,
    _decode_RequestedPointCapacity,
    _encode_RequestedPointCapacity,
} from '../M3100ASN1TypeModule2/RequestedPointCapacity.ta';

/* START_OF_SYMBOL_DEFINITION AddCapacityToTopologicalLinkEndInformation */
/**
 * @summary AddCapacityToTopologicalLinkEndInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddCapacityToTopologicalLinkEndInformation  ::=  RequestedPointCapacity
 * ```
 */
export type AddCapacityToTopologicalLinkEndInformation = RequestedPointCapacity; // DefinedType
/* END_OF_SYMBOL_DEFINITION AddCapacityToTopologicalLinkEndInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AddCapacityToTopologicalLinkEndInformation */
let _cached_decoder_for_AddCapacityToTopologicalLinkEndInformation: $.ASN1Decoder<AddCapacityToTopologicalLinkEndInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AddCapacityToTopologicalLinkEndInformation */

/* START_OF_SYMBOL_DEFINITION _decode_AddCapacityToTopologicalLinkEndInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) AddCapacityToTopologicalLinkEndInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddCapacityToTopologicalLinkEndInformation} The decoded data structure.
 */
export function _decode_AddCapacityToTopologicalLinkEndInformation(
    el: _Element
) {
    if (!_cached_decoder_for_AddCapacityToTopologicalLinkEndInformation) {
        _cached_decoder_for_AddCapacityToTopologicalLinkEndInformation = _decode_RequestedPointCapacity;
    }
    return _cached_decoder_for_AddCapacityToTopologicalLinkEndInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AddCapacityToTopologicalLinkEndInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AddCapacityToTopologicalLinkEndInformation */
let _cached_encoder_for_AddCapacityToTopologicalLinkEndInformation: $.ASN1Encoder<AddCapacityToTopologicalLinkEndInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AddCapacityToTopologicalLinkEndInformation */

/* START_OF_SYMBOL_DEFINITION _encode_AddCapacityToTopologicalLinkEndInformation */
/**
 * @summary Encodes a(n) AddCapacityToTopologicalLinkEndInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddCapacityToTopologicalLinkEndInformation, encoded as an ASN.1 Element.
 */
export function _encode_AddCapacityToTopologicalLinkEndInformation(
    value: AddCapacityToTopologicalLinkEndInformation,
    elGetter: $.ASN1Encoder<AddCapacityToTopologicalLinkEndInformation>
) {
    if (!_cached_encoder_for_AddCapacityToTopologicalLinkEndInformation) {
        _cached_encoder_for_AddCapacityToTopologicalLinkEndInformation = _encode_RequestedPointCapacity;
    }
    return _cached_encoder_for_AddCapacityToTopologicalLinkEndInformation(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_AddCapacityToTopologicalLinkEndInformation */

/* eslint-enable */
