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
import { RemoteUEContext, _decode_RemoteUEContext, _encode_RemoteUEContext } from "../TS33128Payloads/RemoteUEContext.ta.mjs";
// export { RemoteUEContext, _decode_RemoteUEContext, _encode_RemoteUEContext } from "../TS33128Payloads/RemoteUEContext.ta.mjs";


/**
 * @summary RemoteUEContextList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUEContextList ::= SEQUENCE
 * {
 *     numberOfRemoteUEContexts [1] INTEGER,
 *     remoteUEContexts         [2] SET OF RemoteUEContext
 * }
 * ```
 * 
 * @class
 */
export
class RemoteUEContextList {
    constructor (
        /**
         * @summary `numberOfRemoteUEContexts`.
         * @public
         * @readonly
         */
        readonly numberOfRemoteUEContexts: INTEGER,
        /**
         * @summary `remoteUEContexts`.
         * @public
         * @readonly
         */
        readonly remoteUEContexts: RemoteUEContext[]
    ) {}

    /**
     * @summary Restructures an object into a RemoteUEContextList
     * @description
     * 
     * This takes an `object` and converts it to a `RemoteUEContextList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RemoteUEContextList`.
     * @returns {RemoteUEContextList}
     */
    public static _from_object (_o: { [_K in keyof (RemoteUEContextList)]: (RemoteUEContextList)[_K] }): RemoteUEContextList {
        return new RemoteUEContextList(_o.numberOfRemoteUEContexts, _o.remoteUEContexts);
    }


}

/**
 * @summary The Leading Root Component Types of RemoteUEContextList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RemoteUEContextList: $.ComponentSpec[] = [
    new $.ComponentSpec("numberOfRemoteUEContexts", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("remoteUEContexts", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RemoteUEContextList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RemoteUEContextList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RemoteUEContextList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RemoteUEContextList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RemoteUEContextList: $.ASN1Decoder<RemoteUEContextList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RemoteUEContextList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RemoteUEContextList (el: _Element): RemoteUEContextList {
    if (!_cached_decoder_for_RemoteUEContextList) { _cached_decoder_for_RemoteUEContextList = function (el: _Element): RemoteUEContextList {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RemoteUEContextList contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "numberOfRemoteUEContexts";
    sequence[1].name = "remoteUEContexts";
    let numberOfRemoteUEContexts!: INTEGER;
    let remoteUEContexts!: RemoteUEContext[];
    numberOfRemoteUEContexts = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    remoteUEContexts = $._decode_implicit<RemoteUEContext[]>(() => $._decodeSetOf<RemoteUEContext>(() => _decode_RemoteUEContext))(sequence[1]);
    return new RemoteUEContextList(
        numberOfRemoteUEContexts,
        remoteUEContexts,

    );
}; }
    return _cached_decoder_for_RemoteUEContextList(el);
}

let _cached_encoder_for_RemoteUEContextList: $.ASN1Encoder<RemoteUEContextList> | null = null;

/**
 * @summary Encodes a(n) RemoteUEContextList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoteUEContextList, encoded as an ASN.1 Element.
 */
export
function _encode_RemoteUEContextList (value: RemoteUEContextList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RemoteUEContextList) { _cached_encoder_for_RemoteUEContextList = function (value: RemoteUEContextList, elGetter: $.ASN1Encoder<RemoteUEContextList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.numberOfRemoteUEContexts, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSetOf<RemoteUEContext>(() => _encode_RemoteUEContext, $.BER), $.BER)(value.remoteUEContexts, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RemoteUEContextList(value, elGetter);
}


/* eslint-enable */
