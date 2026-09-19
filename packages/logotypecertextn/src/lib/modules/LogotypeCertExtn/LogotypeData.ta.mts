/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LogotypeImage, _decode_LogotypeImage, _encode_LogotypeImage } from "../LogotypeCertExtn/LogotypeImage.ta.mjs";
// export { LogotypeImage, _decode_LogotypeImage, _encode_LogotypeImage } from "../LogotypeCertExtn/LogotypeImage.ta.mjs";
import { LogotypeAudio, _decode_LogotypeAudio, _encode_LogotypeAudio } from "../LogotypeCertExtn/LogotypeAudio.ta.mjs";
// export { LogotypeAudio, _decode_LogotypeAudio, _encode_LogotypeAudio } from "../LogotypeCertExtn/LogotypeAudio.ta.mjs";


/**
 * @summary LogotypeData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogotypeData ::= SEQUENCE {
 *    image           SEQUENCE OF LogotypeImage OPTIONAL,
 *    audio           [1] SEQUENCE OF LogotypeAudio OPTIONAL }
 * ```
 * 
 * @class
 */
export
class LogotypeData {
    constructor (
        /**
         * @summary `image`.
         * @public
         * @readonly
         */
        readonly image: OPTIONAL<LogotypeImage[]>,
        /**
         * @summary `audio`.
         * @public
         * @readonly
         */
        readonly audio: OPTIONAL<LogotypeAudio[]>
    ) {}

    /**
     * @summary Restructures an object into a LogotypeData
     * @description
     * 
     * This takes an `object` and converts it to a `LogotypeData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LogotypeData`.
     * @returns {LogotypeData}
     */
    public static _from_object (_o: { [_K in keyof (LogotypeData)]: (LogotypeData)[_K] }): LogotypeData {
        return new LogotypeData(_o.image, _o.audio);
    }


}

/**
 * @summary The Leading Root Component Types of LogotypeData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LogotypeData: $.ComponentSpec[] = [
    new $.ComponentSpec("image", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("audio", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of LogotypeData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LogotypeData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LogotypeData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LogotypeData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LogotypeData: $.ASN1Decoder<LogotypeData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogotypeData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogotypeData (el: _Element): LogotypeData {
    if (!_cached_decoder_for_LogotypeData) { _cached_decoder_for_LogotypeData = function (el: _Element): LogotypeData {
    let image: OPTIONAL<LogotypeImage[]>;
    let audio: OPTIONAL<LogotypeAudio[]>;
    const callbacks: $.DecodingMap = {
        "image": (_el: _Element): void => { image = $._decodeSequenceOf<LogotypeImage>(() => _decode_LogotypeImage)(_el); },
        "audio": (_el: _Element): void => { audio = $._decode_implicit<LogotypeAudio[]>(() => $._decodeSequenceOf<LogotypeAudio>(() => _decode_LogotypeAudio))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LogotypeData,
        _extension_additions_list_spec_for_LogotypeData,
        _root_component_type_list_2_spec_for_LogotypeData,
        undefined,
    );
    return new LogotypeData(
        image,
        audio
    );
}; }
    return _cached_decoder_for_LogotypeData(el);
}

let _cached_encoder_for_LogotypeData: $.ASN1Encoder<LogotypeData> | null = null;

/**
 * @summary Encodes a(n) LogotypeData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogotypeData, encoded as an ASN.1 Element.
 */
export
function _encode_LogotypeData (value: LogotypeData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogotypeData) { _cached_encoder_for_LogotypeData = function (value: LogotypeData, elGetter: $.ASN1Encoder<LogotypeData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.image === undefined) ? undefined : $._encodeSequenceOf<LogotypeImage>(() => _encode_LogotypeImage, $.BER)(value.image, $.BER)),
            /* IF_ABSENT  */ ((value.audio === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<LogotypeAudio>(() => _encode_LogotypeAudio, $.BER), $.BER)(value.audio, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LogotypeData(value, elGetter);
}


/* eslint-enable */
