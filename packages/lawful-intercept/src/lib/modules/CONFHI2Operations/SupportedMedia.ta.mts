/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type OCTET_STRING,
    type OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SupportedMedia
 * @description
 * 
 * SDP for the conference server side and the conference user side. Carries the
 * bearer description associated with a party. The media value requested with a
 * bearer modification is not a separate parameter. 3GPP TS 33.108, clause 11.5
 * and annex B.11.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SupportedMedia ::= SEQUENCE
 * {
 *         confServerSideSDP        [1] OCTET STRING     type OPTIONAL,  -- include SDP information
 *             -- describing Conf Server Side characteristics.
 * 
 *         confUserSideSDP            [2] OCTET STRING     type OPTIONAL,  -- include SDP information
 *             -- describing Conf User Side characteristics
 * 
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class SupportedMedia {
    /**
     * @summary `confServerSideSDP`.
     * @description
     * 
     * SDP describing the conference server side. 3GPP TS 33.108, annex B.11.1.
     * 
     * @public
     * @readonly
     */
    readonly confServerSideSDP: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `confUserSideSDP`.
     * @description
     * 
     * SDP describing the conference user side. 3GPP TS 33.108, annex B.11.1.
     * 
     * @public
     * @readonly
     */
    readonly confUserSideSDP: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        confServerSideSDP?: OPTIONAL<OCTET_STRING>,
        confUserSideSDP?: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.confServerSideSDP = confServerSideSDP;
        this.confUserSideSDP = confUserSideSDP;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SupportedMedia
     * @description
     * 
     * This takes an `object` and converts it to a `SupportedMedia`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SupportedMedia`.
     * @returns {SupportedMedia}
     */
    public static _from_object (_o: { [_K in keyof (SupportedMedia)]: (SupportedMedia)[_K] }): SupportedMedia {
        return new SupportedMedia(_o.confServerSideSDP, _o.confUserSideSDP, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SupportedMedia
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SupportedMedia: $.ComponentSpec[] = [
    new $.ComponentSpec("confServerSideSDP", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("confUserSideSDP", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SupportedMedia
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SupportedMedia: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SupportedMedia
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SupportedMedia: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SupportedMedia: $.ASN1Decoder<SupportedMedia> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SupportedMedia
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SupportedMedia (el: _Element): SupportedMedia {
    if (!_cached_decoder_for_SupportedMedia) { _cached_decoder_for_SupportedMedia = function (el: _Element): SupportedMedia {
    let confServerSideSDP: OPTIONAL<OCTET_STRING>;
    let confUserSideSDP: OPTIONAL<OCTET_STRING>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "confServerSideSDP": (_el: _Element): void => { confServerSideSDP = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "confUserSideSDP": (_el: _Element): void => { confUserSideSDP = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SupportedMedia,
        _extension_additions_list_spec_for_SupportedMedia,
        _root_component_type_list_2_spec_for_SupportedMedia,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SupportedMedia(
        confServerSideSDP,
        confUserSideSDP,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SupportedMedia(el);
}

let _cached_encoder_for_SupportedMedia: $.ASN1Encoder<SupportedMedia> | null = null;

/**
 * @summary Encodes a(n) SupportedMedia into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SupportedMedia, encoded as an ASN.1 Element.
 */
export
function _encode_SupportedMedia (value: SupportedMedia, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SupportedMedia) { _cached_encoder_for_SupportedMedia = function (value: SupportedMedia, elGetter: $.ASN1Encoder<SupportedMedia>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.confServerSideSDP !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.confServerSideSDP, $.BER);
    }
    if (value.confUserSideSDP !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.confUserSideSDP, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SupportedMedia(value, elGetter);
}


/* eslint-enable */
