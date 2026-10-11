/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GcsePartyIdentity, _decode_GcsePartyIdentity, _encode_GcsePartyIdentity } from "../GCSEHI2Operations/GcsePartyIdentity.ta.mjs";
// export { GcsePartyIdentity, _decode_GcsePartyIdentity, _encode_GcsePartyIdentity } from "../GCSEHI2Operations/GcsePartyIdentity.ta.mjs";


/**
 * @summary MediaID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaID ::= SEQUENCE
 * {
 *         sourceUserID    [1] GcsePartyIdentity    OPTIONAL,  -- include SDP information
 *             -- describing GCSE Server Side characteristics.
 * 
 *         streamID        [2] OCTET STRING     OPTIONAL,  -- include streamID from SDP information.
 * 
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class MediaID {
    /**
     * @summary `sourceUserID`.
     * @public
     * @readonly
     */
    readonly sourceUserID: OPTIONAL<GcsePartyIdentity>;
    /**
     * @summary `streamID`.
     * @public
     * @readonly
     */
    readonly streamID: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sourceUserID: OPTIONAL<GcsePartyIdentity>,
        streamID: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sourceUserID = sourceUserID;
        this.streamID = streamID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a MediaID
     * @description
     * 
     * This takes an `object` and converts it to a `MediaID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MediaID`.
     * @returns {MediaID}
     */
    public static _from_object (_o: { [_K in keyof (MediaID)]: (MediaID)[_K] }): MediaID {
        return new MediaID(_o.sourceUserID, _o.streamID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of MediaID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MediaID: $.ComponentSpec[] = [
    new $.ComponentSpec("sourceUserID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("streamID", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of MediaID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MediaID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MediaID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MediaID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MediaID: $.ASN1Decoder<MediaID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaID (el: _Element): MediaID {
    if (!_cached_decoder_for_MediaID) { _cached_decoder_for_MediaID = function (el: _Element): MediaID {
    let sourceUserID: OPTIONAL<GcsePartyIdentity>;
    let streamID: OPTIONAL<OCTET_STRING>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sourceUserID": (_el: _Element): void => { sourceUserID = $._decode_implicit<GcsePartyIdentity>(() => _decode_GcsePartyIdentity)(_el); },
        "streamID": (_el: _Element): void => { streamID = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MediaID,
        _extension_additions_list_spec_for_MediaID,
        _root_component_type_list_2_spec_for_MediaID,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MediaID(
        sourceUserID,
        streamID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_MediaID(el);
}

let _cached_encoder_for_MediaID: $.ASN1Encoder<MediaID> | null = null;

/**
 * @summary Encodes a(n) MediaID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaID, encoded as an ASN.1 Element.
 */
export
function _encode_MediaID (value: MediaID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaID) { _cached_encoder_for_MediaID = function (value: MediaID, _elGetter: $.ASN1Encoder<MediaID>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.sourceUserID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_GcsePartyIdentity, $.BER)(value.sourceUserID, $.BER);
    }
    if (value.streamID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.streamID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MediaID(value, elGetter);
}


/* eslint-enable */
