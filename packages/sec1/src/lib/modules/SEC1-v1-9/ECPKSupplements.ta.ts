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
import * as $ from "asn1-ts/dist/functional.mjs";
import { ECDomainParameters, _decode_ECDomainParameters, _encode_ECDomainParameters } from "../SEC1-v1-9/ECDomainParameters.ta.js";
export { ECDomainParameters, _decode_ECDomainParameters, _encode_ECDomainParameters } from "../SEC1-v1-9/ECDomainParameters.ta.js";
import { ECCAlgorithms, _decode_ECCAlgorithms, _encode_ECCAlgorithms } from "../SEC1-v1-9/ECCAlgorithms.ta.js";
export { ECCAlgorithms, _decode_ECCAlgorithms, _encode_ECCAlgorithms } from "../SEC1-v1-9/ECCAlgorithms.ta.js";
import { ECCSupplements, _decode_ECCSupplements, _encode_ECCSupplements } from "../SEC1-v1-9/ECCSupplements.ta.js";
export { ECCSupplements, _decode_ECCSupplements, _encode_ECCSupplements } from "../SEC1-v1-9/ECCSupplements.ta.js";


/* START_OF_SYMBOL_DEFINITION ECPKSupplements */
/**
 * @summary ECPKSupplements
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECPKSupplements ::= SEQUENCE {
 *     ecDomain ECDomainParameters {{ SECGCurveNames }},
 *     eccAlgorithms ECCAlgorithms,
 *     eccSupplements ECCSupplements }
 * ```
 * 
 * @class
 */
export
class ECPKSupplements {
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
        readonly eccAlgorithms: ECCAlgorithms,
        /**
         * @summary `eccSupplements`.
         * @public
         * @readonly
         */
        readonly eccSupplements: ECCSupplements
    ) {}

    /**
     * @summary Restructures an object into a ECPKSupplements
     * @description
     * 
     * This takes an `object` and converts it to a `ECPKSupplements`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ECPKSupplements`.
     * @returns {ECPKSupplements}
     */
    public static _from_object (_o: { [_K in keyof (ECPKSupplements)]: (ECPKSupplements)[_K] }): ECPKSupplements {
        return new ECPKSupplements(_o.ecDomain, _o.eccAlgorithms, _o.eccSupplements);
    }


}
/* END_OF_SYMBOL_DEFINITION ECPKSupplements */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ECPKSupplements */
/**
 * @summary The Leading Root Component Types of ECPKSupplements
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ECPKSupplements: $.ComponentSpec[] = [
    new $.ComponentSpec("ecDomain", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("eccAlgorithms", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("eccSupplements", false, $.hasAnyTag, undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_ECPKSupplements */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ECPKSupplements */
/**
 * @summary The Trailing Root Component Types of ECPKSupplements
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ECPKSupplements: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_ECPKSupplements */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ECPKSupplements */
/**
 * @summary The Extension Addition Component Types of ECPKSupplements
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ECPKSupplements: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_ECPKSupplements */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECPKSupplements */
let _cached_decoder_for_ECPKSupplements: $.ASN1Decoder<ECPKSupplements> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECPKSupplements */

/* START_OF_SYMBOL_DEFINITION _decode_ECPKSupplements */
/**
 * @summary Decodes an ASN.1 element into a(n) ECPKSupplements
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECPKSupplements} The decoded data structure.
 */
export
function _decode_ECPKSupplements (el: _Element) {
    if (!_cached_decoder_for_ECPKSupplements) { _cached_decoder_for_ECPKSupplements = function (el: _Element): ECPKSupplements {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("ECPKSupplements contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ecDomain";
    sequence[1].name = "eccAlgorithms";
    sequence[2].name = "eccSupplements";
    let ecDomain!: ECDomainParameters;
    let eccAlgorithms!: ECCAlgorithms;
    let eccSupplements!: ECCSupplements;
    ecDomain = _decode_ECDomainParameters(sequence[0]);
    eccAlgorithms = _decode_ECCAlgorithms(sequence[1]);
    eccSupplements = _decode_ECCSupplements(sequence[2]);
    return new ECPKSupplements(
        ecDomain,
        eccAlgorithms,
        eccSupplements,

    );
}; }
    return _cached_decoder_for_ECPKSupplements(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ECPKSupplements */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECPKSupplements */
let _cached_encoder_for_ECPKSupplements: $.ASN1Encoder<ECPKSupplements> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECPKSupplements */

/* START_OF_SYMBOL_DEFINITION _encode_ECPKSupplements */
/**
 * @summary Encodes a(n) ECPKSupplements into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECPKSupplements, encoded as an ASN.1 Element.
 */
export
function _encode_ECPKSupplements (value: ECPKSupplements, elGetter: $.ASN1Encoder<ECPKSupplements>) {
    if (!_cached_encoder_for_ECPKSupplements) { _cached_encoder_for_ECPKSupplements = function (value: ECPKSupplements, elGetter: $.ASN1Encoder<ECPKSupplements>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ECDomainParameters(value.ecDomain, $.BER),
            /* REQUIRED   */ _encode_ECCAlgorithms(value.eccAlgorithms, $.BER),
            /* REQUIRED   */ _encode_ECCSupplements(value.eccSupplements, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ECPKSupplements(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ECPKSupplements */

/* eslint-enable */
