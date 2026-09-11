/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary GetAgentStateArgument
 * @description
 *
 * Get Agent State request (ECMA-269 §22.1.5.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetAgentStateArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     acdGroup            DeviceID                 OPTIONAL,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class GetAgentStateArgument {
    constructor (
        /**
         * @summary `device`.
         * @description
         *
         * Device whose agent state is queried.
         * @public
         * @readonly
         */
        readonly device: DeviceID,
        /**
         * @summary `acdGroup`.
         * @description
         *
         * If provided, limit the result to this ACD group.
         * @public
         * @readonly
         */
        readonly acdGroup: OPTIONAL<DeviceID>,
        /**
         * @summary `extensions`.
         * @description
         *
         * Optional security (timestamp, sequence, securityInfo) and
         * privateData.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a GetAgentStateArgument
     * @description
     * 
     * This takes an `object` and converts it to a `GetAgentStateArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GetAgentStateArgument`.
     * @returns {GetAgentStateArgument}
     */
    public static _from_object (_o: { [_K in keyof (GetAgentStateArgument)]: (GetAgentStateArgument)[_K] }): GetAgentStateArgument {
        return new GetAgentStateArgument(_o.device, _o.acdGroup, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of GetAgentStateArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GetAgentStateArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("acdGroup", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of GetAgentStateArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GetAgentStateArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GetAgentStateArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GetAgentStateArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GetAgentStateArgument: $.ASN1Decoder<GetAgentStateArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetAgentStateArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetAgentStateArgument (el: _Element): GetAgentStateArgument {
    if (!_cached_decoder_for_GetAgentStateArgument) { _cached_decoder_for_GetAgentStateArgument = function (el: _Element): GetAgentStateArgument {
    let device!: DeviceID;
    let acdGroup: OPTIONAL<DeviceID>;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "acdGroup": (_el: _Element): void => { acdGroup = _decode_DeviceID(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GetAgentStateArgument,
        _extension_additions_list_spec_for_GetAgentStateArgument,
        _root_component_type_list_2_spec_for_GetAgentStateArgument,
        undefined,
    );
    return new GetAgentStateArgument(
        device,
        acdGroup,
        extensions
    );
}; }
    return _cached_decoder_for_GetAgentStateArgument(el);
}

let _cached_encoder_for_GetAgentStateArgument: $.ASN1Encoder<GetAgentStateArgument> | null = null;

/**
 * @summary Encodes a(n) GetAgentStateArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetAgentStateArgument, encoded as an ASN.1 Element.
 */
export
function _encode_GetAgentStateArgument (value: GetAgentStateArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetAgentStateArgument) { _cached_encoder_for_GetAgentStateArgument = function (value: GetAgentStateArgument, elGetter: $.ASN1Encoder<GetAgentStateArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* IF_ABSENT  */ ((value.acdGroup === undefined) ? undefined : _encode_DeviceID(value.acdGroup, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GetAgentStateArgument(value, elGetter);
}


/* eslint-enable */
