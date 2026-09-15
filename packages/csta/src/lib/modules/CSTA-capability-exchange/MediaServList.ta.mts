/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { AttachMediaService, _decode_AttachMediaService, _encode_AttachMediaService } from "../CSTA-capability-exchange/AttachMediaService.ta.mjs";

import { DetachMediaService, _decode_DetachMediaService, _encode_DetachMediaService } from "../CSTA-capability-exchange/DetachMediaService.ta.mjs";



/**
 * @summary MediaServList
 * @description
 * Media Attachment services the SF supports (ECMA-269 Annex C.9, ECMA-285
 * §9.10). Omit unsupported services.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaServList ::= SEQUENCE
 * {     attachMediaService         [0] IMPLICIT     AttachMediaService     OPTIONAL,
 *     detachMediaService         [1] IMPLICIT     DetachMediaService     OPTIONAL }
 * ```
 * 
 * @class
 */
export
class MediaServList {
    constructor (
        /**
         * @summary `attachMediaService`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly attachMediaService: OPTIONAL<AttachMediaService>,
        /**
         * @summary `detachMediaService`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this service; omit if the SF does not support
         * it (ECMA-269 Annex C).
         */
        readonly detachMediaService: OPTIONAL<DetachMediaService>
    ) {}

    /**
     * @summary Restructures an object into a MediaServList
     * @description
     * 
     * This takes an `object` and converts it to a `MediaServList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MediaServList`.
     * @returns {MediaServList}
     */
    public static _from_object (_o: { [_K in keyof (MediaServList)]: (MediaServList)[_K] }): MediaServList {
        return new MediaServList(_o.attachMediaService, _o.detachMediaService);
    }


}

/**
 * @summary The Leading Root Component Types of MediaServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MediaServList: $.ComponentSpec[] = [
    new $.ComponentSpec("attachMediaService", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("detachMediaService", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MediaServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MediaServList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MediaServList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MediaServList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MediaServList: $.ASN1Decoder<MediaServList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaServList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaServList (el: _Element): MediaServList {
    if (!_cached_decoder_for_MediaServList) { _cached_decoder_for_MediaServList = function (el: _Element): MediaServList {
    let attachMediaService: OPTIONAL<AttachMediaService>;
    let detachMediaService: OPTIONAL<DetachMediaService>;
    const callbacks: $.DecodingMap = {
        "attachMediaService": (_el: _Element): void => { attachMediaService = $._decode_implicit<AttachMediaService>(() => _decode_AttachMediaService)(_el); },
        "detachMediaService": (_el: _Element): void => { detachMediaService = $._decode_implicit<DetachMediaService>(() => _decode_DetachMediaService)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MediaServList,
        _extension_additions_list_spec_for_MediaServList,
        _root_component_type_list_2_spec_for_MediaServList,
        undefined,
    );
    return new MediaServList(
        attachMediaService,
        detachMediaService
    );
}; }
    return _cached_decoder_for_MediaServList(el);
}

let _cached_encoder_for_MediaServList: $.ASN1Encoder<MediaServList> | null = null;

/**
 * @summary Encodes a(n) MediaServList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaServList, encoded as an ASN.1 Element.
 */
export
function _encode_MediaServList (value: MediaServList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaServList) { _cached_encoder_for_MediaServList = function (value: MediaServList, elGetter: $.ASN1Encoder<MediaServList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.attachMediaService === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AttachMediaService, $.BER)(value.attachMediaService, $.BER)),
            /* IF_ABSENT  */ ((value.detachMediaService === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_DetachMediaService, $.BER)(value.detachMediaService, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MediaServList(value, elGetter);
}


/* eslint-enable */
