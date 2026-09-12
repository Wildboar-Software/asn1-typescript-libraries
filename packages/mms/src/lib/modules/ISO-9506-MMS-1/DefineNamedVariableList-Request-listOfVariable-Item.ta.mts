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
import { VariableSpecification, _decode_VariableSpecification, _encode_VariableSpecification } from "../ISO-9506-MMS-1/VariableSpecification.ta.mjs";
// export { VariableSpecification, _decode_VariableSpecification, _encode_VariableSpecification } from "../ISO-9506-MMS-1/VariableSpecification.ta.mjs";
import { AlternateAccess, _decode_AlternateAccess, _encode_AlternateAccess } from "../ISO-9506-MMS-1/AlternateAccess.ta.mjs";
// export { AlternateAccess, _decode_AlternateAccess, _encode_AlternateAccess } from "../ISO-9506-MMS-1/AlternateAccess.ta.mjs";


/**
 * @summary DefineNamedVariableList_Request_listOfVariable_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DefineNamedVariableList-Request-listOfVariable-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class DefineNamedVariableList_Request_listOfVariable_Item {
    constructor (
        /**
         * @summary `variableSpecification`.
         * @public
         * @readonly
         */
        readonly variableSpecification: VariableSpecification,
        /**
         * @summary `alternateAccess`.
         * @public
         * @readonly
         */
        readonly alternateAccess: OPTIONAL<AlternateAccess>
    ) {}

    /**
     * @summary Restructures an object into a DefineNamedVariableList_Request_listOfVariable_Item
     * @description
     * 
     * This takes an `object` and converts it to a `DefineNamedVariableList_Request_listOfVariable_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DefineNamedVariableList_Request_listOfVariable_Item`.
     * @returns {DefineNamedVariableList_Request_listOfVariable_Item}
     */
    public static _from_object (_o: { [_K in keyof (DefineNamedVariableList_Request_listOfVariable_Item)]: (DefineNamedVariableList_Request_listOfVariable_Item)[_K] }): DefineNamedVariableList_Request_listOfVariable_Item {
        return new DefineNamedVariableList_Request_listOfVariable_Item(_o.variableSpecification, _o.alternateAccess);
    }


}

/**
 * @summary The Leading Root Component Types of DefineNamedVariableList_Request_listOfVariable_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DefineNamedVariableList_Request_listOfVariable_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("variableSpecification", false, $.hasAnyTag),
    new $.ComponentSpec("alternateAccess", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of DefineNamedVariableList_Request_listOfVariable_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DefineNamedVariableList_Request_listOfVariable_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DefineNamedVariableList_Request_listOfVariable_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DefineNamedVariableList_Request_listOfVariable_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DefineNamedVariableList_Request_listOfVariable_Item: $.ASN1Decoder<DefineNamedVariableList_Request_listOfVariable_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DefineNamedVariableList_Request_listOfVariable_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DefineNamedVariableList_Request_listOfVariable_Item (el: _Element): DefineNamedVariableList_Request_listOfVariable_Item {
    if (!_cached_decoder_for_DefineNamedVariableList_Request_listOfVariable_Item) { _cached_decoder_for_DefineNamedVariableList_Request_listOfVariable_Item = function (el: _Element): DefineNamedVariableList_Request_listOfVariable_Item {
    let variableSpecification!: VariableSpecification;
    let alternateAccess: OPTIONAL<AlternateAccess>;
    const callbacks: $.DecodingMap = {
        "variableSpecification": (_el: _Element): void => { variableSpecification = _decode_VariableSpecification(_el); },
        "alternateAccess": (_el: _Element): void => { alternateAccess = $._decode_implicit<AlternateAccess>(() => _decode_AlternateAccess)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DefineNamedVariableList_Request_listOfVariable_Item,
        _extension_additions_list_spec_for_DefineNamedVariableList_Request_listOfVariable_Item,
        _root_component_type_list_2_spec_for_DefineNamedVariableList_Request_listOfVariable_Item,
        undefined,
    );
    return new DefineNamedVariableList_Request_listOfVariable_Item(
        variableSpecification,
        alternateAccess
    );
}; }
    return _cached_decoder_for_DefineNamedVariableList_Request_listOfVariable_Item(el);
}

let _cached_encoder_for_DefineNamedVariableList_Request_listOfVariable_Item: $.ASN1Encoder<DefineNamedVariableList_Request_listOfVariable_Item> | null = null;

/**
 * @summary Encodes a(n) DefineNamedVariableList_Request_listOfVariable_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefineNamedVariableList_Request_listOfVariable_Item, encoded as an ASN.1 Element.
 */
export
function _encode_DefineNamedVariableList_Request_listOfVariable_Item (value: DefineNamedVariableList_Request_listOfVariable_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DefineNamedVariableList_Request_listOfVariable_Item) { _cached_encoder_for_DefineNamedVariableList_Request_listOfVariable_Item = function (value: DefineNamedVariableList_Request_listOfVariable_Item, elGetter: $.ASN1Encoder<DefineNamedVariableList_Request_listOfVariable_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_VariableSpecification(value.variableSpecification, $.BER),
            /* IF_ABSENT  */ ((value.alternateAccess === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_AlternateAccess, $.BER)(value.alternateAccess, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DefineNamedVariableList_Request_listOfVariable_Item(value, elGetter);
}


/* eslint-enable */
