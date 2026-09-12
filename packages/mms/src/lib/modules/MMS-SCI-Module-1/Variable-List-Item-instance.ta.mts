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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Nullable_Unnamed_Variable_instance, _decode_Nullable_Unnamed_Variable_instance, _encode_Nullable_Unnamed_Variable_instance } from "../MMS-SCI-Module-1/Nullable-Unnamed-Variable-instance.ta.mjs";
// export { Nullable_Unnamed_Variable_instance, _decode_Nullable_Unnamed_Variable_instance, _encode_Nullable_Unnamed_Variable_instance } from "../MMS-SCI-Module-1/Nullable-Unnamed-Variable-instance.ta.mjs";
import { Nullable_Named_Variable_instance, _decode_Nullable_Named_Variable_instance, _encode_Nullable_Named_Variable_instance } from "../MMS-SCI-Module-1/Nullable-Named-Variable-instance.ta.mjs";
// export { Nullable_Named_Variable_instance, _decode_Nullable_Named_Variable_instance, _encode_Nullable_Named_Variable_instance } from "../MMS-SCI-Module-1/Nullable-Named-Variable-instance.ta.mjs";
import { AlternateAccess, _decode_AlternateAccess, _encode_AlternateAccess } from "../ISO-9506-MMS-1/AlternateAccess.ta.mjs";
// export { AlternateAccess, _decode_AlternateAccess, _encode_AlternateAccess } from "../ISO-9506-MMS-1/AlternateAccess.ta.mjs";


/**
 * @summary Variable_List_Item_instance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Variable-List-Item-instance ::= SEQUENCE {
 *     -- NOTE: The following two non-comment lines are deviations from ISO 9506.
 *     -- Types were changed so no non-standard conditional syntax in the ASN.1
 *     -- is needed. Encode NULL as the empty sequence {}, which should produce
 *     -- the same exact encoding.
 *     unnamedItem      [0] IMPLICIT Nullable-Unnamed-Variable-instance OPTIONAL,
 *     namedItem        [1] IMPLICIT Nullable-Named-Variable-instance OPTIONAL,
 *     alternateAccess  [2] IMPLICIT AlternateAccess OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Variable_List_Item_instance {
    constructor (
        /**
         * @summary `unnamedItem`.
         * @public
         * @readonly
         */
        readonly unnamedItem: OPTIONAL<Nullable_Unnamed_Variable_instance>,
        /**
         * @summary `namedItem`.
         * @public
         * @readonly
         */
        readonly namedItem: OPTIONAL<Nullable_Named_Variable_instance>,
        /**
         * @summary `alternateAccess`.
         * @public
         * @readonly
         */
        readonly alternateAccess: OPTIONAL<AlternateAccess>
    ) {}

    /**
     * @summary Restructures an object into a Variable_List_Item_instance
     * @description
     * 
     * This takes an `object` and converts it to a `Variable_List_Item_instance`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Variable_List_Item_instance`.
     * @returns {Variable_List_Item_instance}
     */
    public static _from_object (_o: { [_K in keyof (Variable_List_Item_instance)]: (Variable_List_Item_instance)[_K] }): Variable_List_Item_instance {
        return new Variable_List_Item_instance(_o.unnamedItem, _o.namedItem, _o.alternateAccess);
    }


}

/**
 * @summary The Leading Root Component Types of Variable_List_Item_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Variable_List_Item_instance: $.ComponentSpec[] = [
    new $.ComponentSpec("unnamedItem", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("namedItem", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("alternateAccess", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Variable_List_Item_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Variable_List_Item_instance: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Variable_List_Item_instance
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Variable_List_Item_instance: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Variable_List_Item_instance: $.ASN1Decoder<Variable_List_Item_instance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Variable_List_Item_instance
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Variable_List_Item_instance (el: _Element): Variable_List_Item_instance {
    if (!_cached_decoder_for_Variable_List_Item_instance) { _cached_decoder_for_Variable_List_Item_instance = function (el: _Element): Variable_List_Item_instance {
    let unnamedItem: OPTIONAL<Nullable_Unnamed_Variable_instance>;
    let namedItem: OPTIONAL<Nullable_Named_Variable_instance>;
    let alternateAccess: OPTIONAL<AlternateAccess>;
    const callbacks: $.DecodingMap = {
        "unnamedItem": (_el: _Element): void => { unnamedItem = $._decode_implicit<Nullable_Unnamed_Variable_instance>(() => _decode_Nullable_Unnamed_Variable_instance)(_el); },
        "namedItem": (_el: _Element): void => { namedItem = $._decode_implicit<Nullable_Named_Variable_instance>(() => _decode_Nullable_Named_Variable_instance)(_el); },
        "alternateAccess": (_el: _Element): void => { alternateAccess = $._decode_implicit<AlternateAccess>(() => _decode_AlternateAccess)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Variable_List_Item_instance,
        _extension_additions_list_spec_for_Variable_List_Item_instance,
        _root_component_type_list_2_spec_for_Variable_List_Item_instance,
        undefined,
    );
    return new Variable_List_Item_instance(
        unnamedItem,
        namedItem,
        alternateAccess
    );
}; }
    return _cached_decoder_for_Variable_List_Item_instance(el);
}

let _cached_encoder_for_Variable_List_Item_instance: $.ASN1Encoder<Variable_List_Item_instance> | null = null;

/**
 * @summary Encodes a(n) Variable_List_Item_instance into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Variable_List_Item_instance, encoded as an ASN.1 Element.
 */
export
function _encode_Variable_List_Item_instance (value: Variable_List_Item_instance, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Variable_List_Item_instance) { _cached_encoder_for_Variable_List_Item_instance = function (value: Variable_List_Item_instance, elGetter: $.ASN1Encoder<Variable_List_Item_instance>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.unnamedItem === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Nullable_Unnamed_Variable_instance, $.BER)(value.unnamedItem, $.BER)),
            /* IF_ABSENT  */ ((value.namedItem === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Nullable_Named_Variable_instance, $.BER)(value.namedItem, $.BER)),
            /* IF_ABSENT  */ ((value.alternateAccess === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AlternateAccess, $.BER)(value.alternateAccess, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Variable_List_Item_instance(value, elGetter);
}


/* eslint-enable */
