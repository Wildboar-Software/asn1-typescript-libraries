/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    BOOLEAN,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { ConnectionID, _decode_ConnectionID, _encode_ConnectionID } from "../CSTA-call-connection-identifiers/ConnectionID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary HoldCallArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HoldCallArgument ::= SEQUENCE
 * {    callToBeHeld             ConnectionID,
 *     connectionReservation         BOOLEAN             OPTIONAL,
 *     extensions             CSTACommonArguments         OPTIONAL }
 * ```
 * 
 * @class
 */
export
class HoldCallArgument {
    constructor (
        /**
         * @summary `callToBeHeld`.
         * @public
         * @readonly
         */
        readonly callToBeHeld: ConnectionID,
        /**
         * @summary `connectionReservation`.
         * @public
         * @readonly
         */
        readonly connectionReservation: OPTIONAL<BOOLEAN>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a HoldCallArgument
     * @description
     * 
     * This takes an `object` and converts it to a `HoldCallArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HoldCallArgument`.
     * @returns {HoldCallArgument}
     */
    public static _from_object (_o: { [_K in keyof (HoldCallArgument)]: (HoldCallArgument)[_K] }): HoldCallArgument {
        return new HoldCallArgument(_o.callToBeHeld, _o.connectionReservation, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of HoldCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HoldCallArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("callToBeHeld", false, $.hasTag(_TagClass.application, 11)),
    new $.ComponentSpec("connectionReservation", true, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of HoldCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HoldCallArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HoldCallArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HoldCallArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HoldCallArgument: $.ASN1Decoder<HoldCallArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HoldCallArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HoldCallArgument (el: _Element): HoldCallArgument {
    if (!_cached_decoder_for_HoldCallArgument) { _cached_decoder_for_HoldCallArgument = function (el: _Element): HoldCallArgument {
    let callToBeHeld!: ConnectionID;
    let connectionReservation: OPTIONAL<BOOLEAN>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "callToBeHeld": (_el: _Element): void => { callToBeHeld = _decode_ConnectionID(_el); },
        "connectionReservation": (_el: _Element): void => { connectionReservation = $._decodeBoolean(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_HoldCallArgument,
        _extension_additions_list_spec_for_HoldCallArgument,
        _root_component_type_list_2_spec_for_HoldCallArgument,
        undefined,
    );
    return new HoldCallArgument(
        callToBeHeld,
        connectionReservation,
        extensions
    );
}; }
    return _cached_decoder_for_HoldCallArgument(el);
}

let _cached_encoder_for_HoldCallArgument: $.ASN1Encoder<HoldCallArgument> | null = null;

/**
 * @summary Encodes a(n) HoldCallArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HoldCallArgument, encoded as an ASN.1 Element.
 */
export
function _encode_HoldCallArgument (value: HoldCallArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HoldCallArgument) { _cached_encoder_for_HoldCallArgument = function (value: HoldCallArgument, elGetter: $.ASN1Encoder<HoldCallArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ConnectionID(value.callToBeHeld, $.BER),
            /* IF_ABSENT  */ ((value.connectionReservation === undefined) ? undefined : $._encodeBoolean(value.connectionReservation, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_HoldCallArgument(value, elGetter);
}


/* eslint-enable */
