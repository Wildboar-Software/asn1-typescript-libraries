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
import { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca";
export { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca";


/* START_OF_SYMBOL_DEFINITION SMIMECapability */
/**
 * @summary SMIMECapability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMIMECapability{SMIME-CAPS:CapabilitySet} ::= SEQUENCE {
 * capabilityID    SMIME-CAPS.&id({CapabilitySet}),
 * parameters        SMIME-CAPS.&Type({CapabilitySet}{@capabilityID})
 *                 OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMIMECapability {
    constructor (
        /**
         * @summary `capabilityID`.
         * @public
         * @readonly
         */
        readonly capabilityID: OBJECT_IDENTIFIER,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: OPTIONAL<_Element>
    ) {}

    /**
     * @summary Restructures an object into a SMIMECapability
     * @description
     * 
     * This takes an `object` and converts it to a `SMIMECapability`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMIMECapability`.
     * @returns {SMIMECapability}
     */
    public static _from_object (_o: { [_K in keyof (SMIMECapability)]: (SMIMECapability)[_K] }): SMIMECapability {
        return new SMIMECapability(_o.capabilityID, _o.parameters);
    }


}
/* END_OF_SYMBOL_DEFINITION SMIMECapability */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SMIMECapability */
/**
 * @summary The Leading Root Component Types of SMIMECapability
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMIMECapability: $.ComponentSpec[] = [
    new $.ComponentSpec("capabilityID", false, $.hasTag(_TagClass.universal, 6), undefined, undefined),
    new $.ComponentSpec("parameters", true, $.hasAnyTag, undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SMIMECapability */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SMIMECapability */
/**
 * @summary The Trailing Root Component Types of SMIMECapability
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMIMECapability: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SMIMECapability */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SMIMECapability */
/**
 * @summary The Extension Addition Component Types of SMIMECapability
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMIMECapability: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SMIMECapability */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SMIMECapability */
let _cached_decoder_for_SMIMECapability: $.ASN1Decoder<SMIMECapability> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SMIMECapability */

/* START_OF_SYMBOL_DEFINITION _decode_SMIMECapability */
/**
 * @summary Decodes an ASN.1 element into a(n) SMIMECapability
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SMIMECapability} The decoded data structure.
 */
export
function _decode_SMIMECapability (el: _Element) {
    if (!_cached_decoder_for_SMIMECapability) { _cached_decoder_for_SMIMECapability = function (el: _Element): SMIMECapability {
    /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    let capabilityID!: OBJECT_IDENTIFIER;
    let parameters: OPTIONAL<_Element>;
    /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "capabilityID": (_el: _Element): void => { capabilityID = $._decodeObjectIdentifier(_el); },
        "parameters": (_el: _Element): void => { parameters = $._decodeAny(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMIMECapability,
        _extension_additions_list_spec_for_SMIMECapability,
        _root_component_type_list_2_spec_for_SMIMECapability,
        undefined,
    );
    return new SMIMECapability( /* SEQUENCE_CONSTRUCTOR_CALL */
        capabilityID,
        parameters
    );
}; }
    return _cached_decoder_for_SMIMECapability(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SMIMECapability */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SMIMECapability */
let _cached_encoder_for_SMIMECapability: $.ASN1Encoder<SMIMECapability> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SMIMECapability */

/* START_OF_SYMBOL_DEFINITION _encode_SMIMECapability */
/**
 * @summary Encodes a(n) SMIMECapability into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMIMECapability, encoded as an ASN.1 Element.
 */
export
function _encode_SMIMECapability (value: SMIMECapability, elGetter: $.ASN1Encoder<SMIMECapability>) {
    if (!_cached_encoder_for_SMIMECapability) { _cached_encoder_for_SMIMECapability = function (value: SMIMECapability, elGetter: $.ASN1Encoder<SMIMECapability>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.capabilityID, $.BER),
            /* IF_ABSENT  */ ((value.parameters === undefined) ? undefined : $._encodeAny(value.parameters, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMIMECapability(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SMIMECapability */

/* eslint-enable */
