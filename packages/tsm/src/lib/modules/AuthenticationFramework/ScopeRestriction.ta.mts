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
import { SCOPE_RESTRICTION } from "../AuthenticationFramework/SCOPE-RESTRICTION.oca.mjs";
// export { SCOPE_RESTRICTION } from "../AuthenticationFramework/SCOPE-RESTRICTION.oca.mjs";


/**
 * @summary ScopeRestriction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScopeRestriction ::= SEQUENCE {
 *   id            SCOPE-RESTRICTION.&id,
 *   restriction   SCOPE-RESTRICTION.&Type,
 *   ... }
 * ```
 * 
 * @class
 */
export
class ScopeRestriction {
    constructor (
        /**
         * @summary `id`.
         * @public
         * @readonly
         */
        readonly id: OBJECT_IDENTIFIER,
        /**
         * @summary `restriction`.
         * @public
         * @readonly
         */
        readonly restriction: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ScopeRestriction
     * @description
     * 
     * This takes an `object` and converts it to a `ScopeRestriction`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ScopeRestriction`.
     * @returns {ScopeRestriction}
     */
    public static _from_object (_o: { [_K in keyof (ScopeRestriction)]: (ScopeRestriction)[_K] }): ScopeRestriction {
        return new ScopeRestriction(_o.id, _o.restriction, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ScopeRestriction
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ScopeRestriction: $.ComponentSpec[] = [
    new $.ComponentSpec("id", false, $.hasTag(_TagClass.universal, 6), undefined, undefined),
    new $.ComponentSpec("restriction", false, $.hasAnyTag, undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ScopeRestriction
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ScopeRestriction: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ScopeRestriction
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ScopeRestriction: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ScopeRestriction: $.ASN1Decoder<ScopeRestriction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScopeRestriction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ScopeRestriction (el: _Element): ScopeRestriction {
    if (!_cached_decoder_for_ScopeRestriction) { _cached_decoder_for_ScopeRestriction = function (el: _Element): ScopeRestriction {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ScopeRestriction contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "id";
    sequence[1].name = "restriction";
    let id!: OBJECT_IDENTIFIER;
    let restriction!: _Element;
    id = $._decodeObjectIdentifier(sequence[0]);
    restriction = $._decodeAny(sequence[1]);
    return new ScopeRestriction(
        id,
        restriction,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_ScopeRestriction(el);
}

let _cached_encoder_for_ScopeRestriction: $.ASN1Encoder<ScopeRestriction> | null = null;

/**
 * @summary Encodes a(n) ScopeRestriction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScopeRestriction, encoded as an ASN.1 Element.
 */
export
function _encode_ScopeRestriction (value: ScopeRestriction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ScopeRestriction) { _cached_encoder_for_ScopeRestriction = function (value: ScopeRestriction, elGetter: $.ASN1Encoder<ScopeRestriction>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.id, $.BER),
            /* REQUIRED   */ $._encodeAny(value.restriction, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ScopeRestriction(value, elGetter);
}


/* eslint-enable */
