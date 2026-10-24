/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MediaComponent
 * @description
 * 
 * One media component of an MM. `mediaSize` is the volume size of that
 * component. TS 32.270 does not further define `mediaType`.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaComponent ::= SEQUENCE {
 *    mediaType   [0] IMPLICIT OCTET STRING,
 *    mediaSize   [1] IMPLICIT INTEGER}
 * ```
 * 
 * @class
 */
export
class MediaComponent {
    /**
     * @summary `mediaType`.
     * @description
     *
     * Type of this media component. TS 32.270 does not define the values.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly mediaType: OCTET_STRING;
    /**
     * @summary `mediaSize`.
     * @description
     *
     * Volume size of this media component.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly mediaSize: INTEGER;

    constructor (
        mediaType: OCTET_STRING,
        mediaSize: INTEGER
    ) {
        this.mediaType = mediaType;
        this.mediaSize = mediaSize;
    }

    /**
     * @summary Restructures an object into a MediaComponent
     * @description
     * 
     * This takes an `object` and converts it to a `MediaComponent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MediaComponent`.
     * @returns {MediaComponent}
     */
    public static _from_object (_o: { [_K in keyof (MediaComponent)]: (MediaComponent)[_K] }): MediaComponent {
        return new MediaComponent(_o.mediaType, _o.mediaSize);
    }


}

/**
 * @summary The Leading Root Component Types of MediaComponent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MediaComponent: $.ComponentSpec[] = [
    new $.ComponentSpec("mediaType", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mediaSize", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MediaComponent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MediaComponent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MediaComponent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MediaComponent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MediaComponent: $.ASN1Decoder<MediaComponent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaComponent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaComponent (el: _Element): MediaComponent {
    if (!_cached_decoder_for_MediaComponent) { _cached_decoder_for_MediaComponent = function (el: _Element): MediaComponent {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MediaComponent contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mediaType";
    sequence[1].name = "mediaSize";
    const mediaType: OCTET_STRING = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    const mediaSize: INTEGER = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    return new MediaComponent(
        mediaType,
        mediaSize,

    );
}; }
    return _cached_decoder_for_MediaComponent(el);
}

let _cached_encoder_for_MediaComponent: $.ASN1Encoder<MediaComponent> | null = null;

/**
 * @summary Encodes a(n) MediaComponent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaComponent, encoded as an ASN.1 Element.
 */
export
function _encode_MediaComponent (value: MediaComponent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaComponent) { _cached_encoder_for_MediaComponent = function (value: MediaComponent, _elGetter: $.ASN1Encoder<MediaComponent>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.mediaType, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.mediaSize, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_MediaComponent(value, elGetter);
}


/* eslint-enable */
