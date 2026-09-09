/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { MediaAttached, _decode_MediaAttached, _encode_MediaAttached } from "../CSTA-capability-exchange/MediaAttached.ta.mjs";

import { MediaDetached, _decode_MediaDetached, _encode_MediaDetached } from "../CSTA-capability-exchange/MediaDetached.ta.mjs";



/**
 * @summary MediaEvtsList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaEvtsList ::= SEQUENCE
 * {     mediaAttached             [0] IMPLICIT     MediaAttached         OPTIONAL,
 *     mediaDetached             [1] IMPLICIT     MediaDetached         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class MediaEvtsList {
    constructor (
        /**
         * @summary `mediaAttached`.
         * @public
         * @readonly
         */
        readonly mediaAttached: OPTIONAL<MediaAttached>,
        /**
         * @summary `mediaDetached`.
         * @public
         * @readonly
         */
        readonly mediaDetached: OPTIONAL<MediaDetached>
    ) {}

    /**
     * @summary Restructures an object into a MediaEvtsList
     * @description
     * 
     * This takes an `object` and converts it to a `MediaEvtsList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MediaEvtsList`.
     * @returns {MediaEvtsList}
     */
    public static _from_object (_o: { [_K in keyof (MediaEvtsList)]: (MediaEvtsList)[_K] }): MediaEvtsList {
        return new MediaEvtsList(_o.mediaAttached, _o.mediaDetached);
    }


}

/**
 * @summary The Leading Root Component Types of MediaEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MediaEvtsList: $.ComponentSpec[] = [
    new $.ComponentSpec("mediaAttached", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mediaDetached", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MediaEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MediaEvtsList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MediaEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MediaEvtsList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MediaEvtsList: $.ASN1Decoder<MediaEvtsList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaEvtsList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaEvtsList (el: _Element): MediaEvtsList {
    if (!_cached_decoder_for_MediaEvtsList) { _cached_decoder_for_MediaEvtsList = function (el: _Element): MediaEvtsList {
    let mediaAttached: OPTIONAL<MediaAttached>;
    let mediaDetached: OPTIONAL<MediaDetached>;
    const callbacks: $.DecodingMap = {
        "mediaAttached": (_el: _Element): void => { mediaAttached = $._decode_implicit<MediaAttached>(() => _decode_MediaAttached)(_el); },
        "mediaDetached": (_el: _Element): void => { mediaDetached = $._decode_implicit<MediaDetached>(() => _decode_MediaDetached)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MediaEvtsList,
        _extension_additions_list_spec_for_MediaEvtsList,
        _root_component_type_list_2_spec_for_MediaEvtsList,
        undefined,
    );
    return new MediaEvtsList(
        mediaAttached,
        mediaDetached
    );
}; }
    return _cached_decoder_for_MediaEvtsList(el);
}

let _cached_encoder_for_MediaEvtsList: $.ASN1Encoder<MediaEvtsList> | null = null;

/**
 * @summary Encodes a(n) MediaEvtsList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaEvtsList, encoded as an ASN.1 Element.
 */
export
function _encode_MediaEvtsList (value: MediaEvtsList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaEvtsList) { _cached_encoder_for_MediaEvtsList = function (value: MediaEvtsList, elGetter: $.ASN1Encoder<MediaEvtsList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.mediaAttached === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_MediaAttached, $.BER)(value.mediaAttached, $.BER)),
            /* IF_ABSENT  */ ((value.mediaDetached === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_MediaDetached, $.BER)(value.mediaDetached, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MediaEvtsList(value, elGetter);
}


/* eslint-enable */
