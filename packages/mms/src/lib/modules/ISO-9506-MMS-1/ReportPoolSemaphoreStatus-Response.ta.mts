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
import { ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item, _decode_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item, _encode_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item } from "../ISO-9506-MMS-1/ReportPoolSemaphoreStatus-Response-listOfNamedTokens-Item.ta.mjs";
// export { ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item, _decode_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item, _encode_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item } from "../ISO-9506-MMS-1/ReportPoolSemaphoreStatus-Response-listOfNamedTokens-Item.ta.mjs";


/**
 * @summary ReportPoolSemaphoreStatus_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportPoolSemaphoreStatus-Response ::= SEQUENCE {
 *    listOfNamedTokens             [0] IMPLICIT SEQUENCE OF CHOICE {
 *        freeNamedToken                [0] IMPLICIT Identifier,
 *        ownedNamedToken               [1] IMPLICIT Identifier,
 *        hungNamedToken                [2] IMPLICIT Identifier    },
 *    moreFollows                   [1] IMPLICIT BOOLEAN DEFAULT TRUE
 *    }
 * ```
 * 
 * @class
 */
export
class ReportPoolSemaphoreStatus_Response {
    constructor (
        /**
         * @summary `listOfNamedTokens`.
         * @public
         * @readonly
         */
        readonly listOfNamedTokens: ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item[],
        /**
         * @summary `moreFollows`.
         * @public
         * @readonly
         */
        readonly moreFollows: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a ReportPoolSemaphoreStatus_Response
     * @description
     * 
     * This takes an `object` and converts it to a `ReportPoolSemaphoreStatus_Response`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportPoolSemaphoreStatus_Response`.
     * @returns {ReportPoolSemaphoreStatus_Response}
     */
    public static _from_object (_o: { [_K in keyof (ReportPoolSemaphoreStatus_Response)]: (ReportPoolSemaphoreStatus_Response)[_K] }): ReportPoolSemaphoreStatus_Response {
        return new ReportPoolSemaphoreStatus_Response(_o.listOfNamedTokens, _o.moreFollows);
    }

    /**
     * @summary Getter that returns the default value for `moreFollows`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_moreFollows () { return true; }
}

/**
 * @summary The Leading Root Component Types of ReportPoolSemaphoreStatus_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReportPoolSemaphoreStatus_Response: $.ComponentSpec[] = [
    new $.ComponentSpec("listOfNamedTokens", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("moreFollows", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ReportPoolSemaphoreStatus_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReportPoolSemaphoreStatus_Response: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReportPoolSemaphoreStatus_Response
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReportPoolSemaphoreStatus_Response: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReportPoolSemaphoreStatus_Response: $.ASN1Decoder<ReportPoolSemaphoreStatus_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportPoolSemaphoreStatus_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportPoolSemaphoreStatus_Response (el: _Element): ReportPoolSemaphoreStatus_Response {
    if (!_cached_decoder_for_ReportPoolSemaphoreStatus_Response) { _cached_decoder_for_ReportPoolSemaphoreStatus_Response = function (el: _Element): ReportPoolSemaphoreStatus_Response {
    let listOfNamedTokens!: ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item[];
    let moreFollows: OPTIONAL<BOOLEAN> = ReportPoolSemaphoreStatus_Response._default_value_for_moreFollows;
    const callbacks: $.DecodingMap = {
        "listOfNamedTokens": (_el: _Element): void => { listOfNamedTokens = $._decode_implicit<ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item[]>(() => $._decodeSequenceOf<ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item>(() => _decode_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item))(_el); },
        "moreFollows": (_el: _Element): void => { moreFollows = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReportPoolSemaphoreStatus_Response,
        _extension_additions_list_spec_for_ReportPoolSemaphoreStatus_Response,
        _root_component_type_list_2_spec_for_ReportPoolSemaphoreStatus_Response,
        undefined,
    );
    return new ReportPoolSemaphoreStatus_Response(
        listOfNamedTokens,
        moreFollows
    );
}; }
    return _cached_decoder_for_ReportPoolSemaphoreStatus_Response(el);
}

let _cached_encoder_for_ReportPoolSemaphoreStatus_Response: $.ASN1Encoder<ReportPoolSemaphoreStatus_Response> | null = null;

/**
 * @summary Encodes a(n) ReportPoolSemaphoreStatus_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportPoolSemaphoreStatus_Response, encoded as an ASN.1 Element.
 */
export
function _encode_ReportPoolSemaphoreStatus_Response (value: ReportPoolSemaphoreStatus_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportPoolSemaphoreStatus_Response) { _cached_encoder_for_ReportPoolSemaphoreStatus_Response = function (value: ReportPoolSemaphoreStatus_Response, elGetter: $.ASN1Encoder<ReportPoolSemaphoreStatus_Response>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item>(() => _encode_ReportPoolSemaphoreStatus_Response_listOfNamedTokens_Item, $.BER), $.BER)(value.listOfNamedTokens, $.BER),
            /* IF_DEFAULT */ (value.moreFollows === undefined || $.deepEq(value.moreFollows, ReportPoolSemaphoreStatus_Response._default_value_for_moreFollows) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.moreFollows, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReportPoolSemaphoreStatus_Response(value, elGetter);
}


/* eslint-enable */
