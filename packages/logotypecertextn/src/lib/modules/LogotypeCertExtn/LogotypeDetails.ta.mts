/* eslint-disable */
import {
    IA5String,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { HashAlgAndValue, _decode_HashAlgAndValue, _encode_HashAlgAndValue } from "../LogotypeCertExtn/HashAlgAndValue.ta.mjs";
// export { HashAlgAndValue, _decode_HashAlgAndValue, _encode_HashAlgAndValue } from "../LogotypeCertExtn/HashAlgAndValue.ta.mjs";


/**
 * @summary LogotypeDetails
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogotypeDetails ::= SEQUENCE {
 *    mediaType       IA5String, -- MIME media type name and optional
 *                               -- parameters
 *    logotypeHash    SEQUENCE SIZE (1..MAX) OF HashAlgAndValue,
 *    logotypeURI     SEQUENCE SIZE (1..MAX) OF IA5String }
 * ```
 * 
 * @class
 */
export
class LogotypeDetails {
    constructor (
        /**
         * @summary `mediaType`.
         * @public
         * @readonly
         */
        readonly mediaType: IA5String,
        /**
         * @summary `logotypeHash`.
         * @public
         * @readonly
         */
        readonly logotypeHash: HashAlgAndValue[],
        /**
         * @summary `logotypeURI`.
         * @public
         * @readonly
         */
        readonly logotypeURI: IA5String[]
    ) {}

    /**
     * @summary Restructures an object into a LogotypeDetails
     * @description
     * 
     * This takes an `object` and converts it to a `LogotypeDetails`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LogotypeDetails`.
     * @returns {LogotypeDetails}
     */
    public static _from_object (_o: { [_K in keyof (LogotypeDetails)]: (LogotypeDetails)[_K] }): LogotypeDetails {
        return new LogotypeDetails(_o.mediaType, _o.logotypeHash, _o.logotypeURI);
    }


}

/**
 * @summary The Leading Root Component Types of LogotypeDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LogotypeDetails: $.ComponentSpec[] = [
    new $.ComponentSpec("mediaType", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("logotypeHash", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("logotypeURI", false, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of LogotypeDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LogotypeDetails: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LogotypeDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LogotypeDetails: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LogotypeDetails: $.ASN1Decoder<LogotypeDetails> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogotypeDetails
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogotypeDetails (el: _Element): LogotypeDetails {
    if (!_cached_decoder_for_LogotypeDetails) { _cached_decoder_for_LogotypeDetails = function (el: _Element): LogotypeDetails {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("LogotypeDetails contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mediaType";
    sequence[1].name = "logotypeHash";
    sequence[2].name = "logotypeURI";
    let mediaType!: IA5String;
    let logotypeHash!: HashAlgAndValue[];
    let logotypeURI!: IA5String[];
    mediaType = $._decodeIA5String(sequence[0]);
    logotypeHash = $._decodeSequenceOf<HashAlgAndValue>(() => _decode_HashAlgAndValue)(sequence[1]);
    logotypeURI = $._decodeSequenceOf<IA5String>(() => $._decodeIA5String)(sequence[2]);
    return new LogotypeDetails(
        mediaType,
        logotypeHash,
        logotypeURI,

    );
}; }
    return _cached_decoder_for_LogotypeDetails(el);
}

let _cached_encoder_for_LogotypeDetails: $.ASN1Encoder<LogotypeDetails> | null = null;

/**
 * @summary Encodes a(n) LogotypeDetails into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogotypeDetails, encoded as an ASN.1 Element.
 */
export
function _encode_LogotypeDetails (value: LogotypeDetails, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogotypeDetails) { _cached_encoder_for_LogotypeDetails = function (value: LogotypeDetails, elGetter: $.ASN1Encoder<LogotypeDetails>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeIA5String(value.mediaType, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<HashAlgAndValue>(() => _encode_HashAlgAndValue, $.BER)(value.logotypeHash, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<IA5String>(() => $._encodeIA5String, $.BER)(value.logotypeURI, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LogotypeDetails(value, elGetter);
}


/* eslint-enable */
