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
import { RegionalSubscriptionResponse, _enum_for_RegionalSubscriptionResponse, RegionalSubscriptionResponse_networkNode_AreaRestricted /* IMPORTED_LONG_ENUMERATION_ITEM */, networkNode_AreaRestricted /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegionalSubscriptionResponse_tooManyZoneCodes /* IMPORTED_LONG_ENUMERATION_ITEM */, tooManyZoneCodes /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegionalSubscriptionResponse_zoneCodesConflict /* IMPORTED_LONG_ENUMERATION_ITEM */, zoneCodesConflict /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegionalSubscriptionResponse_regionalSubscNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, regionalSubscNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RegionalSubscriptionResponse, _encode_RegionalSubscriptionResponse } from "../MAP-MS-DataTypes/RegionalSubscriptionResponse.ta.mjs";
// export { RegionalSubscriptionResponse, _enum_for_RegionalSubscriptionResponse, RegionalSubscriptionResponse_networkNode_AreaRestricted /* IMPORTED_LONG_ENUMERATION_ITEM */, networkNode_AreaRestricted /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegionalSubscriptionResponse_tooManyZoneCodes /* IMPORTED_LONG_ENUMERATION_ITEM */, tooManyZoneCodes /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegionalSubscriptionResponse_zoneCodesConflict /* IMPORTED_LONG_ENUMERATION_ITEM */, zoneCodesConflict /* IMPORTED_SHORT_ENUMERATION_ITEM */, RegionalSubscriptionResponse_regionalSubscNotSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, regionalSubscNotSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_RegionalSubscriptionResponse, _encode_RegionalSubscriptionResponse } from "../MAP-MS-DataTypes/RegionalSubscriptionResponse.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary DeleteSubscriberDataRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteSubscriberDataRes ::= SEQUENCE {
 *     regionalSubscriptionResponse    [0] RegionalSubscriptionResponse    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class DeleteSubscriberDataRes {
    constructor (
        /**
         * @summary `regionalSubscriptionResponse`.
         * @public
         * @readonly
         */
        readonly regionalSubscriptionResponse: OPTIONAL<RegionalSubscriptionResponse>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DeleteSubscriberDataRes
     * @description
     * 
     * This takes an `object` and converts it to a `DeleteSubscriberDataRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeleteSubscriberDataRes`.
     * @returns {DeleteSubscriberDataRes}
     */
    public static _from_object (_o: { [_K in keyof (DeleteSubscriberDataRes)]: (DeleteSubscriberDataRes)[_K] }): DeleteSubscriberDataRes {
        return new DeleteSubscriberDataRes(_o.regionalSubscriptionResponse, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `regionalSubscriptionResponse`
         * @public
         * @static
         */

    public static _enum_for_regionalSubscriptionResponse = _enum_for_RegionalSubscriptionResponse;
}

/**
 * @summary The Leading Root Component Types of DeleteSubscriberDataRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeleteSubscriberDataRes: $.ComponentSpec[] = [
    new $.ComponentSpec("regionalSubscriptionResponse", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of DeleteSubscriberDataRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeleteSubscriberDataRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeleteSubscriberDataRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeleteSubscriberDataRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeleteSubscriberDataRes: $.ASN1Decoder<DeleteSubscriberDataRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteSubscriberDataRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteSubscriberDataRes (el: _Element): DeleteSubscriberDataRes {
    if (!_cached_decoder_for_DeleteSubscriberDataRes) { _cached_decoder_for_DeleteSubscriberDataRes = function (el: _Element): DeleteSubscriberDataRes {
    let regionalSubscriptionResponse: OPTIONAL<RegionalSubscriptionResponse>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "regionalSubscriptionResponse": (_el: _Element): void => { regionalSubscriptionResponse = $._decode_implicit<RegionalSubscriptionResponse>(() => _decode_RegionalSubscriptionResponse)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeleteSubscriberDataRes,
        _extension_additions_list_spec_for_DeleteSubscriberDataRes,
        _root_component_type_list_2_spec_for_DeleteSubscriberDataRes,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DeleteSubscriberDataRes(
        regionalSubscriptionResponse,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DeleteSubscriberDataRes(el);
}

let _cached_encoder_for_DeleteSubscriberDataRes: $.ASN1Encoder<DeleteSubscriberDataRes> | null = null;

/**
 * @summary Encodes a(n) DeleteSubscriberDataRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteSubscriberDataRes, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteSubscriberDataRes (value: DeleteSubscriberDataRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteSubscriberDataRes) { _cached_encoder_for_DeleteSubscriberDataRes = function (value: DeleteSubscriberDataRes, elGetter: $.ASN1Encoder<DeleteSubscriberDataRes>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.regionalSubscriptionResponse === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_RegionalSubscriptionResponse, $.BER)(value.regionalSubscriptionResponse, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeleteSubscriberDataRes(value, elGetter);
}


/* eslint-enable */
