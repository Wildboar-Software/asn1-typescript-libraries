/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SubjectComponent, _decode_SubjectComponent, _encode_SubjectComponent } from "../MMSChargingDataTypes/SubjectComponent.ta.mjs";
import { MediaComponent, _decode_MediaComponent, _encode_MediaComponent } from "../MMSChargingDataTypes/MediaComponent.ta.mjs";


/**
 * @summary MMComponentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMComponentType ::= SEQUENCE {
 *    subject    [0] IMPLICIT SubjectComponent,
 *    media      [1] IMPLICIT SET  OF
 *       MediaComponent}
 * ```
 * 
 * @class
 */
export
class MMComponentType {
    /**
     * @summary `subject`.
     * @public
     * @readonly
     */
    readonly subject: SubjectComponent;
    /**
     * @summary `media`.
     * @public
     * @readonly
     */
    readonly media: MediaComponent[];

    constructor (
        subject: SubjectComponent,
        media: MediaComponent[]
    ) {
        this.subject = subject;
        this.media = media;
    }

    /**
     * @summary Restructures an object into a MMComponentType
     * @description
     * 
     * This takes an `object` and converts it to a `MMComponentType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMComponentType`.
     * @returns {MMComponentType}
     */
    public static _from_object (_o: { [_K in keyof (MMComponentType)]: (MMComponentType)[_K] }): MMComponentType {
        return new MMComponentType(_o.subject, _o.media);
    }


}

/**
 * @summary The Leading Root Component Types of MMComponentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMComponentType: $.ComponentSpec[] = [
    new $.ComponentSpec("subject", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("media", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of MMComponentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMComponentType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMComponentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMComponentType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMComponentType: $.ASN1Decoder<MMComponentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMComponentType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMComponentType (el: _Element): MMComponentType {
    if (!_cached_decoder_for_MMComponentType) { _cached_decoder_for_MMComponentType = function (el: _Element): MMComponentType {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("MMComponentType contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "subject";
    sequence[1].name = "media";
    const subject: SubjectComponent = $._decode_implicit<SubjectComponent>(() => _decode_SubjectComponent)(sequence[0]);
    const media: MediaComponent[] = $._decode_implicit<MediaComponent[]>(() => $._decodeSetOf<MediaComponent>(() => _decode_MediaComponent))(sequence[1]);
    return new MMComponentType(
        subject,
        media,

    );
}; }
    return _cached_decoder_for_MMComponentType(el);
}

let _cached_encoder_for_MMComponentType: $.ASN1Encoder<MMComponentType> | null = null;

/**
 * @summary Encodes a(n) MMComponentType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMComponentType, encoded as an ASN.1 Element.
 */
export
function _encode_MMComponentType (value: MMComponentType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMComponentType) { _cached_encoder_for_MMComponentType = function (value: MMComponentType, _elGetter: $.ASN1Encoder<MMComponentType>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_SubjectComponent, $.BER)(value.subject, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSetOf<MediaComponent>(() => _encode_MediaComponent, $.BER), $.BER)(value.media, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_MMComponentType(value, elGetter);
}


/* eslint-enable */
