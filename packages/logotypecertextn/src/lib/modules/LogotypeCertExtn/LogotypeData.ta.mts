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
 * Image files and optional audio files for a single logotype. An
 * indirect `.LTD` file is the DER encoding of this structure.
 *
 * Several images, or several audio files, are variants of the same
 * picture or the same audio. A spoken message in another language
 * counts as such a variant. A client displays at most one of the
 * images, and plays at most one of the audio sequences, for a given
 * logotype at the same time. It may show the image without audio, or
 * play the audio without an image. Logotypes of different types may
 * be on screen together. Clients should cache what they fetch.
 *
 * [RFC 3709, section 3](https://www.rfc-editor.org/rfc/rfc3709#section-3)
 * and [section 4.1](https://www.rfc-editor.org/rfc/rfc3709#section-4.1).
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
         * Image-file variants of this logotype. Every logotype included
         * in a certificate has at least one image, even though this
         * component is optional in the ASN.1. Clients accept
         * `image/jpeg` and `image/gif`. Animated images should not be
         * used. At least one variant should be between 60×45 and
         * 200×150 pixels.
         *
         * [RFC 3709, section 3](https://www.rfc-editor.org/rfc/rfc3709#section-3)
         * and [section 4.1](https://www.rfc-editor.org/rfc/rfc3709#section-4.1).
         * @public
         * @readonly
         */
        readonly image: OPTIONAL<LogotypeImage[]>,
        /**
         * Audio-file variants of this logotype. Optional for the
         * certificate and optional for implementations. A client that
         * does support audio accepts `audio/mpeg`. At least one
         * variant should play for between 1 and 30 seconds. At most
         * one sequence from this logotype plays at a time, and
         * [section 6](https://www.rfc-editor.org/rfc/rfc3709#section-6)
         * also allows only one logotype audio sequence in total.
         *
         * [RFC 3709, section 3](https://www.rfc-editor.org/rfc/rfc3709#section-3).
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
    if (!_cached_encoder_for_LogotypeData) { _cached_encoder_for_LogotypeData = function (value: LogotypeData): _Element {
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
