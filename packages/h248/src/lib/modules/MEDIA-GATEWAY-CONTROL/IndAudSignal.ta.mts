/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PkgdName, _decode_PkgdName, _encode_PkgdName } from "../MEDIA-GATEWAY-CONTROL/PkgdName.ta.mjs";
// export { PkgdName, _decode_PkgdName, _encode_PkgdName } from "../MEDIA-GATEWAY-CONTROL/PkgdName.ta.mjs";
import { StreamID, _decode_StreamID, _encode_StreamID } from "../MEDIA-GATEWAY-CONTROL/StreamID.ta.mjs";
// export { StreamID, _decode_StreamID, _encode_StreamID } from "../MEDIA-GATEWAY-CONTROL/StreamID.ta.mjs";
import { RequestID, _decode_RequestID, _encode_RequestID } from "../MEDIA-GATEWAY-CONTROL/RequestID.ta.mjs";
// export { RequestID, _decode_RequestID, _encode_RequestID } from "../MEDIA-GATEWAY-CONTROL/RequestID.ta.mjs";


/**
 * @summary IndAudSignal
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IndAudSignal ::= SEQUENCE
 *     {
 *         signalName                    [0] PkgdName,
 *         streamID                    [1] StreamID OPTIONAL,
 *         ...,
 *         signalRequestID                [2] RequestID OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class IndAudSignal {
    constructor (
        /**
         * @summary `signalName`.
         * @public
         * @readonly
         */
        readonly signalName: PkgdName,
        /**
         * @summary `streamID`.
         * @public
         * @readonly
         */
        readonly streamID: OPTIONAL<StreamID>,
        /**
         * @summary `signalRequestID`.
         * @public
         * @readonly
         */
        readonly signalRequestID: OPTIONAL<RequestID>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IndAudSignal
     * @description
     * 
     * This takes an `object` and converts it to a `IndAudSignal`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IndAudSignal`.
     * @returns {IndAudSignal}
     */
    public static _from_object (_o: { [_K in keyof (IndAudSignal)]: (IndAudSignal)[_K] }): IndAudSignal {
        return new IndAudSignal(_o.signalName, _o.streamID, _o.signalRequestID, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IndAudSignal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IndAudSignal: $.ComponentSpec[] = [
    new $.ComponentSpec("signalName", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("streamID", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IndAudSignal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IndAudSignal: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IndAudSignal
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IndAudSignal: $.ComponentSpec[] = [
    new $.ComponentSpec("signalRequestID", true, $.hasTag(_TagClass.context, 2))
];

let _cached_decoder_for_IndAudSignal: $.ASN1Decoder<IndAudSignal> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IndAudSignal
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IndAudSignal (el: _Element): IndAudSignal {
    if (!_cached_decoder_for_IndAudSignal) { _cached_decoder_for_IndAudSignal = function (el: _Element): IndAudSignal {
    let signalName!: PkgdName;
    let streamID: OPTIONAL<StreamID>;
    let signalRequestID: OPTIONAL<RequestID>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "signalName": (_el: _Element): void => { signalName = $._decode_implicit<PkgdName>(() => _decode_PkgdName)(_el); },
        "streamID": (_el: _Element): void => { streamID = $._decode_implicit<StreamID>(() => _decode_StreamID)(_el); },
        "signalRequestID": (_el: _Element): void => { signalRequestID = $._decode_implicit<RequestID>(() => _decode_RequestID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IndAudSignal,
        _extension_additions_list_spec_for_IndAudSignal,
        _root_component_type_list_2_spec_for_IndAudSignal,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IndAudSignal(
        signalName,
        streamID,
        signalRequestID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IndAudSignal(el);
}

let _cached_encoder_for_IndAudSignal: $.ASN1Encoder<IndAudSignal> | null = null;

/**
 * @summary Encodes a(n) IndAudSignal into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IndAudSignal, encoded as an ASN.1 Element.
 */
export
function _encode_IndAudSignal (value: IndAudSignal, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IndAudSignal) { _cached_encoder_for_IndAudSignal = function (value: IndAudSignal, elGetter: $.ASN1Encoder<IndAudSignal>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_PkgdName, $.BER)(value.signalName, $.BER),
            /* IF_ABSENT  */ ((value.streamID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_StreamID, $.BER)(value.streamID, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.signalRequestID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_RequestID, $.BER)(value.signalRequestID, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IndAudSignal(value, elGetter);
}


/* eslint-enable */
