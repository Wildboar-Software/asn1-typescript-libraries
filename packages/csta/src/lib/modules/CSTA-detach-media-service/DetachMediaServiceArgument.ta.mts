/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import {
    MediaServiceType,
    _enum_for_MediaServiceType,
    _decode_MediaServiceType,
    _encode_MediaServiceType
} from "../CSTA-media-services/MediaServiceType.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary DetachMediaServiceArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DetachMediaServiceArgument ::= SEQUENCE
 * {    connection             ConnectionID,
 *     mediaServiceType        MediaServiceType,
 *     extensions             CSTACommonArguments        OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DetachMediaServiceArgument {
    constructor (
        /**
         * @summary `connection`.
         * @public
         * @readonly
         */
        readonly connection: ConnectionID,
        /**
         * @summary `mediaServiceType`.
         * @public
         * @readonly
         */
        readonly mediaServiceType: MediaServiceType,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a DetachMediaServiceArgument
     * @description
     * 
     * This takes an `object` and converts it to a `DetachMediaServiceArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DetachMediaServiceArgument`.
     * @returns {DetachMediaServiceArgument}
     */
    public static _from_object (_o: { [_K in keyof (DetachMediaServiceArgument)]: (DetachMediaServiceArgument)[_K] }): DetachMediaServiceArgument {
        return new DetachMediaServiceArgument(_o.connection, _o.mediaServiceType, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `mediaServiceType`
         * @public
         * @static
         */

    public static _enum_for_mediaServiceType = _enum_for_MediaServiceType;
}

/**
 * @summary The Leading Root Component Types of DetachMediaServiceArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DetachMediaServiceArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("connection", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("mediaServiceType", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of DetachMediaServiceArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DetachMediaServiceArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DetachMediaServiceArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DetachMediaServiceArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DetachMediaServiceArgument: $.ASN1Decoder<DetachMediaServiceArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DetachMediaServiceArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DetachMediaServiceArgument (el: _Element): DetachMediaServiceArgument {
    if (!_cached_decoder_for_DetachMediaServiceArgument) { _cached_decoder_for_DetachMediaServiceArgument = function (el: _Element): DetachMediaServiceArgument {
    let connection!: ConnectionID;
    let mediaServiceType!: MediaServiceType;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "connection": (_el: _Element): void => { connection = _decode_ConnectionID(_el); },
        "mediaServiceType": (_el: _Element): void => { mediaServiceType = _decode_MediaServiceType(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DetachMediaServiceArgument,
        _extension_additions_list_spec_for_DetachMediaServiceArgument,
        _root_component_type_list_2_spec_for_DetachMediaServiceArgument,
        undefined,
    );
    return new DetachMediaServiceArgument(
        connection,
        mediaServiceType,
        extensions
    );
}; }
    return _cached_decoder_for_DetachMediaServiceArgument(el);
}

let _cached_encoder_for_DetachMediaServiceArgument: $.ASN1Encoder<DetachMediaServiceArgument> | null = null;

/**
 * @summary Encodes a(n) DetachMediaServiceArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DetachMediaServiceArgument, encoded as an ASN.1 Element.
 */
export
function _encode_DetachMediaServiceArgument (value: DetachMediaServiceArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DetachMediaServiceArgument) { _cached_encoder_for_DetachMediaServiceArgument = function (value: DetachMediaServiceArgument, elGetter: $.ASN1Encoder<DetachMediaServiceArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.connection, $.BER),
            /* REQUIRED   */ _encode_MediaServiceType(value.mediaServiceType, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DetachMediaServiceArgument(value, elGetter);
}


/* eslint-enable */
