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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { ECDomainParameters, _decode_ECDomainParameters, _encode_ECDomainParameters } from "../SEC1-v1-9/ECDomainParameters.ta";
export { ECDomainParameters, _decode_ECDomainParameters, _encode_ECDomainParameters } from "../SEC1-v1-9/ECDomainParameters.ta";
import { ECCAlgorithms, _decode_ECCAlgorithms, _encode_ECCAlgorithms } from "../SEC1-v1-9/ECCAlgorithms.ta";
export { ECCAlgorithms, _decode_ECCAlgorithms, _encode_ECCAlgorithms } from "../SEC1-v1-9/ECCAlgorithms.ta";


/* START_OF_SYMBOL_DEFINITION ECPKRestrictions */
/**
 * @summary ECPKRestrictions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECPKRestrictions ::= SEQUENCE {
 *     ecDomain ECDomainParameters {{ SECGCurveNames }},
 *     eccAlgorithms ECCAlgorithms
 * }
 * ```
 * 
 * @class
 */
export
class ECPKRestrictions {
    constructor (
        /**
         * @summary `ecDomain`.
         * @public
         * @readonly
         */
        readonly ecDomain: ECDomainParameters,
        /**
         * @summary `eccAlgorithms`.
         * @public
         * @readonly
         */
        readonly eccAlgorithms: ECCAlgorithms
    ) {}

    /**
     * @summary Restructures an object into a ECPKRestrictions
     * @description
     * 
     * This takes an `object` and converts it to a `ECPKRestrictions`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ECPKRestrictions`.
     * @returns {ECPKRestrictions}
     */
    public static _from_object (_o: { [_K in keyof (ECPKRestrictions)]: (ECPKRestrictions)[_K] }): ECPKRestrictions {
        return new ECPKRestrictions(_o.ecDomain, _o.eccAlgorithms);
    }


}
/* END_OF_SYMBOL_DEFINITION ECPKRestrictions */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ECPKRestrictions */
/**
 * @summary The Leading Root Component Types of ECPKRestrictions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ECPKRestrictions: $.ComponentSpec[] = [
    new $.ComponentSpec("ecDomain", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("eccAlgorithms", false, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ECPKRestrictions */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ECPKRestrictions */
/**
 * @summary The Trailing Root Component Types of ECPKRestrictions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ECPKRestrictions: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ECPKRestrictions */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ECPKRestrictions */
/**
 * @summary The Extension Addition Component Types of ECPKRestrictions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ECPKRestrictions: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ECPKRestrictions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECPKRestrictions */
let _cached_decoder_for_ECPKRestrictions: $.ASN1Decoder<ECPKRestrictions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECPKRestrictions */

/* START_OF_SYMBOL_DEFINITION _decode_ECPKRestrictions */
/**
 * @summary Decodes an ASN.1 element into a(n) ECPKRestrictions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECPKRestrictions} The decoded data structure.
 */
export
function _decode_ECPKRestrictions (el: _Element) {
    if (!_cached_decoder_for_ECPKRestrictions) { _cached_decoder_for_ECPKRestrictions = function (el: _Element): ECPKRestrictions {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ECPKRestrictions contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ecDomain";
    sequence[1].name = "eccAlgorithms";
    let ecDomain!: ECDomainParameters;
    let eccAlgorithms!: ECCAlgorithms;
    ecDomain = _decode_ECDomainParameters(sequence[0]);
    eccAlgorithms = _decode_ECCAlgorithms(sequence[1]);
    return new ECPKRestrictions(
        ecDomain,
        eccAlgorithms,

    );
}; }
    return _cached_decoder_for_ECPKRestrictions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ECPKRestrictions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECPKRestrictions */
let _cached_encoder_for_ECPKRestrictions: $.ASN1Encoder<ECPKRestrictions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECPKRestrictions */

/* START_OF_SYMBOL_DEFINITION _encode_ECPKRestrictions */
/**
 * @summary Encodes a(n) ECPKRestrictions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECPKRestrictions, encoded as an ASN.1 Element.
 */
export
function _encode_ECPKRestrictions (value: ECPKRestrictions, elGetter: $.ASN1Encoder<ECPKRestrictions>) {
    if (!_cached_encoder_for_ECPKRestrictions) { _cached_encoder_for_ECPKRestrictions = function (value: ECPKRestrictions, elGetter: $.ASN1Encoder<ECPKRestrictions>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ECDomainParameters(value.ecDomain, $.BER),
            /* REQUIRED   */ _encode_ECCAlgorithms(value.eccAlgorithms, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ECPKRestrictions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ECPKRestrictions */

/* eslint-enable */
