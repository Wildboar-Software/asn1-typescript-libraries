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
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { CONTEXT } from "../InformationFramework/CONTEXT.oca.mjs";
// export { CONTEXT } from "../InformationFramework/CONTEXT.oca.mjs";


/**
 * @summary DITContextUse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DITContextUse ::= SEQUENCE {
 *   attributeType           ATTRIBUTE.&id,
 *   mandatoryContexts  [1]  SET SIZE (1..MAX) OF CONTEXT.&id OPTIONAL,
 *   optionalContexts   [2]  SET SIZE (1..MAX) OF CONTEXT.&id OPTIONAL,
 *   ... }
 * ```
 * 
 * @class
 */
export
class DITContextUse {
    constructor (
        /**
         * @summary `attributeType`.
         * @public
         * @readonly
         */
        readonly attributeType: OBJECT_IDENTIFIER,
        /**
         * @summary `mandatoryContexts`.
         * @public
         * @readonly
         */
        readonly mandatoryContexts: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `optionalContexts`.
         * @public
         * @readonly
         */
        readonly optionalContexts: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DITContextUse
     * @description
     * 
     * This takes an `object` and converts it to a `DITContextUse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DITContextUse`.
     * @returns {DITContextUse}
     */
    public static _from_object (_o: { [_K in keyof (DITContextUse)]: (DITContextUse)[_K] }): DITContextUse {
        return new DITContextUse(_o.attributeType, _o.mandatoryContexts, _o.optionalContexts, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of DITContextUse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DITContextUse: $.ComponentSpec[] = [
    new $.ComponentSpec("attributeType", false, $.hasTag(_TagClass.universal, 6), undefined, undefined),
    new $.ComponentSpec("mandatoryContexts", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("optionalContexts", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of DITContextUse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DITContextUse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DITContextUse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DITContextUse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DITContextUse: $.ASN1Decoder<DITContextUse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DITContextUse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DITContextUse (el: _Element): DITContextUse {
    if (!_cached_decoder_for_DITContextUse) { _cached_decoder_for_DITContextUse = function (el: _Element): DITContextUse {
    let attributeType!: OBJECT_IDENTIFIER;
    let mandatoryContexts: OPTIONAL<OBJECT_IDENTIFIER[]>;
    let optionalContexts: OPTIONAL<OBJECT_IDENTIFIER[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "attributeType": (_el: _Element): void => { attributeType = $._decodeObjectIdentifier(_el); },
        "mandatoryContexts": (_el: _Element): void => { mandatoryContexts = $._decode_explicit<OBJECT_IDENTIFIER[]>(() => $._decodeSetOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier))(_el); },
        "optionalContexts": (_el: _Element): void => { optionalContexts = $._decode_explicit<OBJECT_IDENTIFIER[]>(() => $._decodeSetOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DITContextUse,
        _extension_additions_list_spec_for_DITContextUse,
        _root_component_type_list_2_spec_for_DITContextUse,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DITContextUse(
        attributeType,
        mandatoryContexts,
        optionalContexts,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DITContextUse(el);
}

let _cached_encoder_for_DITContextUse: $.ASN1Encoder<DITContextUse> | null = null;

/**
 * @summary Encodes a(n) DITContextUse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DITContextUse, encoded as an ASN.1 Element.
 */
export
function _encode_DITContextUse (value: DITContextUse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DITContextUse) { _cached_encoder_for_DITContextUse = function (value: DITContextUse, elGetter: $.ASN1Encoder<DITContextUse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.attributeType, $.BER),
            /* IF_ABSENT  */ ((value.mandatoryContexts === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => $._encodeSetOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.mandatoryContexts, $.BER)),
            /* IF_ABSENT  */ ((value.optionalContexts === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => $._encodeSetOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.optionalContexts, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DITContextUse(value, elGetter);
}


/* eslint-enable */
