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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { GetAccessControlListAttributes_Response_accessControlListElements, _decode_GetAccessControlListAttributes_Response_accessControlListElements, _encode_GetAccessControlListAttributes_Response_accessControlListElements } from "../ISO-9506-MMS-1/GetAccessControlListAttributes-Response-accessControlListElements.ta.mjs";
// export { GetAccessControlListAttributes_Response_accessControlListElements, _decode_GetAccessControlListAttributes_Response_accessControlListElements, _encode_GetAccessControlListAttributes_Response_accessControlListElements } from "../ISO-9506-MMS-1/GetAccessControlListAttributes-Response-accessControlListElements.ta.mjs";
import { GetAccessControlListAttributes_Response_references_Item, _decode_GetAccessControlListAttributes_Response_references_Item, _encode_GetAccessControlListAttributes_Response_references_Item } from "../ISO-9506-MMS-1/GetAccessControlListAttributes-Response-references-Item.ta.mjs";
// export { GetAccessControlListAttributes_Response_references_Item, _decode_GetAccessControlListAttributes_Response_references_Item, _encode_GetAccessControlListAttributes_Response_references_Item } from "../ISO-9506-MMS-1/GetAccessControlListAttributes-Response-references-Item.ta.mjs";


/**
 * @summary GetAccessControlListAttributes_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAccessControlListAttributes-Response ::= SEQUENCE {
 *    name                       [0] Identifier,
 *    accessControlListElements     [1] IMPLICIT SEQUENCE {
 *        readAccessCondition              [0] AccessCondition OPTIONAL,
 *        storeAccessCondition             [1] AccessCondition OPTIONAL,
 *        writeAccessCondition             [2] AccessCondition OPTIONAL,
 *        loadAccessCondition              [3] AccessCondition OPTIONAL,
 *        executeAccessCondition           [4] AccessCondition OPTIONAL,
 *        deleteAccessCondition            [5] AccessCondition OPTIONAL,
 *        editAccessCondition              [6] AccessCondition OPTIONAL
 *        },
 *    vMDuse                        [2] IMPLICIT BOOLEAN,
 *    references                    [3] IMPLICIT SEQUENCE OF SEQUENCE {
 *        objectClass                      [0] ObjectClass,
 *        objectCount                      [1] IMPLICIT INTEGER
 *        }
 * ,  accessControlList             [4] IMPLICIT Identifier OPTIONAL
 *                        -- shall be included if and only if
 *                        -- aco has been negotiated
 *    }
 * ```
 * 
 * @class
 */
export
class GetAccessControlListAttributes_Response {
    constructor (
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: Identifier,
        /**
         * @summary `accessControlListElements`.
         * @public
         * @readonly
         */
        readonly accessControlListElements: GetAccessControlListAttributes_Response_accessControlListElements,
        /**
         * @summary `vMDuse`.
         * @public
         * @readonly
         */
        readonly vMDuse: BOOLEAN,
        /**
         * @summary `references`.
         * @public
         * @readonly
         */
        readonly references: GetAccessControlListAttributes_Response_references_Item[],
        /**
         * @summary `accessControlList`.
         * @public
         * @readonly
         */
        readonly accessControlList: OPTIONAL<Identifier>
    ) {}

    /**
     * @summary Restructures an object into a GetAccessControlListAttributes_Response
     * @description
     * 
     * This takes an `object` and converts it to a `GetAccessControlListAttributes_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetAccessControlListAttributes_Response`.
     * @returns {GetAccessControlListAttributes_Response}
     */
    public static _from_object (_o: { [_K in keyof (GetAccessControlListAttributes_Response)]: (GetAccessControlListAttributes_Response)[_K] }): GetAccessControlListAttributes_Response {
        return new GetAccessControlListAttributes_Response(_o.name, _o.accessControlListElements, _o.vMDuse, _o.references, _o.accessControlList);
    }


}

/**
 * @summary The Leading Root Component Types of GetAccessControlListAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetAccessControlListAttributes_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("accessControlListElements", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("vMDuse", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("references", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("accessControlList", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of GetAccessControlListAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetAccessControlListAttributes_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetAccessControlListAttributes_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetAccessControlListAttributes_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetAccessControlListAttributes_Response: $.ASN1Decoder<GetAccessControlListAttributes_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetAccessControlListAttributes_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetAccessControlListAttributes_Response (el: _Element): GetAccessControlListAttributes_Response {
    if (!_cached_decoder_for_GetAccessControlListAttributes_Response) { _cached_decoder_for_GetAccessControlListAttributes_Response = function (el: _Element): GetAccessControlListAttributes_Response {
    let name!: Identifier;
    let accessControlListElements!: GetAccessControlListAttributes_Response_accessControlListElements;
    let vMDuse!: BOOLEAN;
    let references!: GetAccessControlListAttributes_Response_references_Item[];
    let accessControlList: OPTIONAL<Identifier>;
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); },
        "accessControlListElements": (_el: _Element): void => { accessControlListElements = $._decode_implicit<GetAccessControlListAttributes_Response_accessControlListElements>(() => _decode_GetAccessControlListAttributes_Response_accessControlListElements)(_el); },
        "vMDuse": (_el: _Element): void => { vMDuse = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "references": (_el: _Element): void => { references = $._decode_implicit<GetAccessControlListAttributes_Response_references_Item[]>(() => $._decodeSequenceOf<GetAccessControlListAttributes_Response_references_Item>(() => _decode_GetAccessControlListAttributes_Response_references_Item))(_el); },
        "accessControlList": (_el: _Element): void => { accessControlList = $._decode_explicit<Identifier>(() => _decode_Identifier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetAccessControlListAttributes_Response,
        _extension_additions_list_spec_for_GetAccessControlListAttributes_Response,
        _root_component_type_list_2_spec_for_GetAccessControlListAttributes_Response,
        undefined,
    );
    return new GetAccessControlListAttributes_Response(
        name,
        accessControlListElements,
        vMDuse,
        references,
        accessControlList
    );
}; }
    return _cached_decoder_for_GetAccessControlListAttributes_Response(el);
}

let _cached_encoder_for_GetAccessControlListAttributes_Response: $.ASN1Encoder<GetAccessControlListAttributes_Response> | null = null;

/**
 * @summary Encodes a(n) GetAccessControlListAttributes_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetAccessControlListAttributes_Response, encoded as an ASN.1 Element.
 */
export
function _encode_GetAccessControlListAttributes_Response (value: GetAccessControlListAttributes_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetAccessControlListAttributes_Response) { _cached_encoder_for_GetAccessControlListAttributes_Response = function (value: GetAccessControlListAttributes_Response, elGetter: $.ASN1Encoder<GetAccessControlListAttributes_Response>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_Identifier, $.BER)(value.name, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GetAccessControlListAttributes_Response_accessControlListElements, $.BER)(value.accessControlListElements, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.vMDuse, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<GetAccessControlListAttributes_Response_references_Item>(() => _encode_GetAccessControlListAttributes_Response_references_Item, $.BER), $.BER)(value.references, $.BER),
            /* IF_ABSENT  */ ((value.accessControlList === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_Identifier, $.BER)(value.accessControlList, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetAccessControlListAttributes_Response(value, elGetter);
}


/* eslint-enable */
