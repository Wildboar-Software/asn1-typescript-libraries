/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { IOCrossRefID, _decode_IOCrossRefID, _encode_IOCrossRefID } from "../CSTA-device-feature-types/IOCrossRefID.ta.mjs";

import { IORegisterReqID, _decode_IORegisterReqID, _encode_IORegisterReqID } from "../CSTA-device-feature-types/IORegisterReqID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SuspendDataPathArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SuspendDataPathArgument ::= SEQUENCE
 * {    ioCrossRefID            IOCrossRefID,
 *     ioRegisterReqID            IORegisterReqID                OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SuspendDataPathArgument {
    constructor (
        /**
         * @summary `ioCrossRefID`.
         * @public
         * @readonly
         */
        readonly ioCrossRefID: IOCrossRefID,
        /**
         * @summary `ioRegisterReqID`.
         * @public
         * @readonly
         */
        readonly ioRegisterReqID: OPTIONAL<IORegisterReqID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SuspendDataPathArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SuspendDataPathArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SuspendDataPathArgument`.
     * @returns {SuspendDataPathArgument}
     */
    public static _from_object (_o: { [_K in keyof (SuspendDataPathArgument)]: (SuspendDataPathArgument)[_K] }): SuspendDataPathArgument {
        return new SuspendDataPathArgument(_o.ioCrossRefID, _o.ioRegisterReqID, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SuspendDataPathArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SuspendDataPathArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("ioCrossRefID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("ioRegisterReqID", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SuspendDataPathArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SuspendDataPathArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SuspendDataPathArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SuspendDataPathArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SuspendDataPathArgument: $.ASN1Decoder<SuspendDataPathArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SuspendDataPathArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SuspendDataPathArgument (el: _Element): SuspendDataPathArgument {
    if (!_cached_decoder_for_SuspendDataPathArgument) { _cached_decoder_for_SuspendDataPathArgument = function (el: _Element): SuspendDataPathArgument {
    let ioCrossRefID!: IOCrossRefID;
    let ioRegisterReqID: OPTIONAL<IORegisterReqID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "ioCrossRefID": (_el: _Element): void => { ioCrossRefID = _decode_IOCrossRefID(_el); },
        "ioRegisterReqID": (_el: _Element): void => { ioRegisterReqID = _decode_IORegisterReqID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SuspendDataPathArgument,
        _extension_additions_list_spec_for_SuspendDataPathArgument,
        _root_component_type_list_2_spec_for_SuspendDataPathArgument,
        undefined,
    );
    return new SuspendDataPathArgument(
        ioCrossRefID,
        ioRegisterReqID,
        extensions
    );
}; }
    return _cached_decoder_for_SuspendDataPathArgument(el);
}

let _cached_encoder_for_SuspendDataPathArgument: $.ASN1Encoder<SuspendDataPathArgument> | null = null;

/**
 * @summary Encodes a(n) SuspendDataPathArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuspendDataPathArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SuspendDataPathArgument (value: SuspendDataPathArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SuspendDataPathArgument) { _cached_encoder_for_SuspendDataPathArgument = function (value: SuspendDataPathArgument, elGetter: $.ASN1Encoder<SuspendDataPathArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_IOCrossRefID(value.ioCrossRefID, $.BER),
            /* IF_ABSENT  */ ((value.ioRegisterReqID === undefined) ? undefined : _encode_IORegisterReqID(value.ioRegisterReqID, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SuspendDataPathArgument(value, elGetter);
}


/* eslint-enable */
