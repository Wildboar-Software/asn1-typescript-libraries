/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../CAP-datatypes/CallSegmentID.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../CAP-datatypes/Extensions.ta.mjs";



/**
 * @summary DisconnectForwardConnectionWithArgumentArg
 * @description
 * 
 * Argument of DisconnectForwardConnectionWithArgument: which call segment to
 * detach from the resource. (3GPP TS 29.078 V19.0.0 clause 11.14.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisconnectForwardConnectionWithArgumentArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     callSegmentID            [1] CallSegmentID {bound}            OPTIONAL,
 *     extensions                [2] Extensions {bound}            OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class DisconnectForwardConnectionWithArgumentArg {
    constructor (
        /**
         * @summary `callSegmentID`.
         * @description
         *
         * Call Segment to disconnect from the gsmSRF or assisting gsmSSF. (3GPP
         * TS 29.078 V19.0.0 clause 11.14.1.1).
         *
         * @public
         * @readonly
         */
        readonly callSegmentID: OPTIONAL<CallSegmentID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DisconnectForwardConnectionWithArgumentArg
     * @description
     * 
     * This takes an `object` and converts it to a `DisconnectForwardConnectionWithArgumentArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DisconnectForwardConnectionWithArgumentArg`.
     * @returns {DisconnectForwardConnectionWithArgumentArg}
     */
    public static _from_object (_o: { [_K in keyof (DisconnectForwardConnectionWithArgumentArg)]: (DisconnectForwardConnectionWithArgumentArg)[_K] }): DisconnectForwardConnectionWithArgumentArg {
        return new DisconnectForwardConnectionWithArgumentArg(_o.callSegmentID, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of DisconnectForwardConnectionWithArgumentArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DisconnectForwardConnectionWithArgumentArg: $.ComponentSpec[] = [
    new $.ComponentSpec("callSegmentID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DisconnectForwardConnectionWithArgumentArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DisconnectForwardConnectionWithArgumentArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DisconnectForwardConnectionWithArgumentArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DisconnectForwardConnectionWithArgumentArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DisconnectForwardConnectionWithArgumentArg: $.ASN1Decoder<DisconnectForwardConnectionWithArgumentArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisconnectForwardConnectionWithArgumentArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisconnectForwardConnectionWithArgumentArg (el: _Element): DisconnectForwardConnectionWithArgumentArg {
    if (!_cached_decoder_for_DisconnectForwardConnectionWithArgumentArg) { _cached_decoder_for_DisconnectForwardConnectionWithArgumentArg = function (el: _Element): DisconnectForwardConnectionWithArgumentArg {
    let callSegmentID: OPTIONAL<CallSegmentID>;
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "callSegmentID": (_el: _Element): void => { callSegmentID = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DisconnectForwardConnectionWithArgumentArg,
        _extension_additions_list_spec_for_DisconnectForwardConnectionWithArgumentArg,
        _root_component_type_list_2_spec_for_DisconnectForwardConnectionWithArgumentArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DisconnectForwardConnectionWithArgumentArg(
        callSegmentID,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DisconnectForwardConnectionWithArgumentArg(el);
}

let _cached_encoder_for_DisconnectForwardConnectionWithArgumentArg: $.ASN1Encoder<DisconnectForwardConnectionWithArgumentArg> | null = null;

/**
 * @summary Encodes a(n) DisconnectForwardConnectionWithArgumentArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisconnectForwardConnectionWithArgumentArg, encoded as an ASN.1 Element.
 */
export
function _encode_DisconnectForwardConnectionWithArgumentArg (value: DisconnectForwardConnectionWithArgumentArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisconnectForwardConnectionWithArgumentArg) { _cached_encoder_for_DisconnectForwardConnectionWithArgumentArg = function (value: DisconnectForwardConnectionWithArgumentArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.callSegmentID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Extensions, $.BER)(value.extensions, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DisconnectForwardConnectionWithArgumentArg(value, elGetter);
}


/* eslint-enable */
