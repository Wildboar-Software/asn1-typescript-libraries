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
import { DeviceID, _decode_DeviceID, _encode_DeviceID } from "../CSTA-device-identifiers/DeviceID.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary SetRouteingModeArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetRouteingModeArgument ::= SEQUENCE
 * {    device                 DeviceID,
 *     routeingMode            BOOLEAN,
 *     extensions            CSTACommonArguments             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SetRouteingModeArgument {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: DeviceID,
        /**
         * @summary `routeingMode`.
         * @public
         * @readonly
         */
        readonly routeingMode: BOOLEAN,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a SetRouteingModeArgument
     * @description
     * 
     * This takes an `object` and converts it to a `SetRouteingModeArgument`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SetRouteingModeArgument`.
     * @returns {SetRouteingModeArgument}
     */
    public static _from_object (_o: { [_K in keyof (SetRouteingModeArgument)]: (SetRouteingModeArgument)[_K] }): SetRouteingModeArgument {
        return new SetRouteingModeArgument(_o.device, _o.routeingMode, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of SetRouteingModeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SetRouteingModeArgument: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("routeingMode", false, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of SetRouteingModeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SetRouteingModeArgument: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SetRouteingModeArgument
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SetRouteingModeArgument: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SetRouteingModeArgument: $.ASN1Decoder<SetRouteingModeArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetRouteingModeArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetRouteingModeArgument (el: _Element): SetRouteingModeArgument {
    if (!_cached_decoder_for_SetRouteingModeArgument) { _cached_decoder_for_SetRouteingModeArgument = function (el: _Element): SetRouteingModeArgument {
    let device!: DeviceID;
    let routeingMode!: BOOLEAN;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_DeviceID(_el); },
        "routeingMode": (_el: _Element): void => { routeingMode = $._decodeBoolean(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SetRouteingModeArgument,
        _extension_additions_list_spec_for_SetRouteingModeArgument,
        _root_component_type_list_2_spec_for_SetRouteingModeArgument,
        undefined,
    );
    return new SetRouteingModeArgument(
        device,
        routeingMode,
        extensions
    );
}; }
    return _cached_decoder_for_SetRouteingModeArgument(el);
}

let _cached_encoder_for_SetRouteingModeArgument: $.ASN1Encoder<SetRouteingModeArgument> | null = null;

/**
 * @summary Encodes a(n) SetRouteingModeArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetRouteingModeArgument, encoded as an ASN.1 Element.
 */
export
function _encode_SetRouteingModeArgument (value: SetRouteingModeArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetRouteingModeArgument) { _cached_encoder_for_SetRouteingModeArgument = function (value: SetRouteingModeArgument, elGetter: $.ASN1Encoder<SetRouteingModeArgument>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DeviceID(value.device, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.routeingMode, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SetRouteingModeArgument(value, elGetter);
}


/* eslint-enable */
