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
import { TBSCertAVL_entries_Item_idType, _decode_TBSCertAVL_entries_Item_idType, _encode_TBSCertAVL_entries_Item_idType } from "../AuthenticationFramework/TBSCertAVL-entries-Item-idType.ta.mjs";
// export { TBSCertAVL_entries_Item_idType, _decode_TBSCertAVL_entries_Item_idType, _encode_TBSCertAVL_entries_Item_idType } from "../AuthenticationFramework/TBSCertAVL-entries-Item-idType.ta.mjs";
import { ScopeRestrictions, _decode_ScopeRestrictions, _encode_ScopeRestrictions } from "../AuthenticationFramework/ScopeRestrictions.ta.mjs";
// export { ScopeRestrictions, _decode_ScopeRestrictions, _encode_ScopeRestrictions } from "../AuthenticationFramework/ScopeRestrictions.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../AuthenticationFramework/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../AuthenticationFramework/Extensions.ta.mjs";


/**
 * @summary TBSCertAVL_entries_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TBSCertAVL-entries-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class TBSCertAVL_entries_Item {
    constructor (
        /**
         * @summary `idType`.
         * @public
         * @readonly
         */
        readonly idType: TBSCertAVL_entries_Item_idType,
        /**
         * @summary `scope`.
         * @public
         * @readonly
         */
        readonly scope: OPTIONAL<ScopeRestrictions>,
        /**
         * @summary `entryExtensions`.
         * @public
         * @readonly
         */
        readonly entryExtensions: OPTIONAL<Extensions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a TBSCertAVL_entries_Item
     * @description
     * 
     * This takes an `object` and converts it to a `TBSCertAVL_entries_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TBSCertAVL_entries_Item`.
     * @returns {TBSCertAVL_entries_Item}
     */
    public static _from_object (_o: { [_K in keyof (TBSCertAVL_entries_Item)]: (TBSCertAVL_entries_Item)[_K] }): TBSCertAVL_entries_Item {
        return new TBSCertAVL_entries_Item(_o.idType, _o.scope, _o.entryExtensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TBSCertAVL_entries_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TBSCertAVL_entries_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("idType", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("scope", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("entryExtensions", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of TBSCertAVL_entries_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TBSCertAVL_entries_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TBSCertAVL_entries_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TBSCertAVL_entries_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TBSCertAVL_entries_Item: $.ASN1Decoder<TBSCertAVL_entries_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TBSCertAVL_entries_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TBSCertAVL_entries_Item (el: _Element): TBSCertAVL_entries_Item {
    if (!_cached_decoder_for_TBSCertAVL_entries_Item) { _cached_decoder_for_TBSCertAVL_entries_Item = function (el: _Element): TBSCertAVL_entries_Item {
    let idType!: TBSCertAVL_entries_Item_idType;
    let scope: OPTIONAL<ScopeRestrictions>;
    let entryExtensions: OPTIONAL<Extensions>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "idType": (_el: _Element): void => { idType = _decode_TBSCertAVL_entries_Item_idType(_el); },
        "scope": (_el: _Element): void => { scope = $._decode_implicit<ScopeRestrictions>(() => _decode_ScopeRestrictions)(_el); },
        "entryExtensions": (_el: _Element): void => { entryExtensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TBSCertAVL_entries_Item,
        _extension_additions_list_spec_for_TBSCertAVL_entries_Item,
        _root_component_type_list_2_spec_for_TBSCertAVL_entries_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TBSCertAVL_entries_Item(
        idType,
        scope,
        entryExtensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TBSCertAVL_entries_Item(el);
}

let _cached_encoder_for_TBSCertAVL_entries_Item: $.ASN1Encoder<TBSCertAVL_entries_Item> | null = null;

/**
 * @summary Encodes a(n) TBSCertAVL_entries_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSCertAVL_entries_Item, encoded as an ASN.1 Element.
 */
export
function _encode_TBSCertAVL_entries_Item (value: TBSCertAVL_entries_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TBSCertAVL_entries_Item) { _cached_encoder_for_TBSCertAVL_entries_Item = function (value: TBSCertAVL_entries_Item, elGetter: $.ASN1Encoder<TBSCertAVL_entries_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_TBSCertAVL_entries_Item_idType(value.idType, $.BER),
            /* IF_ABSENT  */ ((value.scope === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ScopeRestrictions, $.BER)(value.scope, $.BER)),
            /* IF_ABSENT  */ ((value.entryExtensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Extensions, $.BER)(value.entryExtensions, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TBSCertAVL_entries_Item(value, elGetter);
}


/* eslint-enable */
