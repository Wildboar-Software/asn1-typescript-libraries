/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { BackInService, _decode_BackInService, _encode_BackInService } from "../CSTA-capability-exchange/BackInService.ta.mjs";

import { DeviceCapsChanged, _decode_DeviceCapsChanged, _encode_DeviceCapsChanged } from "../CSTA-capability-exchange/DeviceCapsChanged.ta.mjs";

import { OutOfService, _decode_OutOfService, _encode_OutOfService } from "../CSTA-capability-exchange/OutOfService.ta.mjs";

import { PartiallyInService, _decode_PartiallyInService, _encode_PartiallyInService } from "../CSTA-capability-exchange/PartiallyInService.ta.mjs";



/**
 * @summary DeviceMaintEvtsList
 * @description
 * Device Maintenance events the SF supports (ECMA-269 Annex C.16, ECMA-285
 * §9.10). Omit unsupported events.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceMaintEvtsList ::= SEQUENCE
 * {     backInService             [0] IMPLICIT     BackInService         OPTIONAL,
 *     deviceCapsChanged         [1] IMPLICIT     DeviceCapsChanged     OPTIONAL,
 *     outOfService             [2] IMPLICIT     OutOfService         OPTIONAL,
 *     partiallyInService        [3] IMPLICIT    PartiallyInService    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DeviceMaintEvtsList {
    constructor (
        /**
         * @summary `backInService`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly backInService: OPTIONAL<BackInService>,
        /**
         * @summary `deviceCapsChanged`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly deviceCapsChanged: OPTIONAL<DeviceCapsChanged>,
        /**
         * @summary `outOfService`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly outOfService: OPTIONAL<OutOfService>,
        /**
         * @summary `partiallyInService`.
         * @public
         * @readonly
         * @description
         * Capability bitmap for this event; omit if the SF does not support it
         * (ECMA-269 Annex C).
         */
        readonly partiallyInService: OPTIONAL<PartiallyInService>
    ) {}

    /**
     * @summary Restructures an object into a DeviceMaintEvtsList
     * @description
     * 
     * This takes an `object` and converts it to a `DeviceMaintEvtsList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeviceMaintEvtsList`.
     * @returns {DeviceMaintEvtsList}
     */
    public static _from_object (_o: { [_K in keyof (DeviceMaintEvtsList)]: (DeviceMaintEvtsList)[_K] }): DeviceMaintEvtsList {
        return new DeviceMaintEvtsList(_o.backInService, _o.deviceCapsChanged, _o.outOfService, _o.partiallyInService);
    }


}

/**
 * @summary The Leading Root Component Types of DeviceMaintEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeviceMaintEvtsList: $.ComponentSpec[] = [
    new $.ComponentSpec("backInService", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("deviceCapsChanged", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("outOfService", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("partiallyInService", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of DeviceMaintEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeviceMaintEvtsList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeviceMaintEvtsList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeviceMaintEvtsList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeviceMaintEvtsList: $.ASN1Decoder<DeviceMaintEvtsList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceMaintEvtsList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceMaintEvtsList (el: _Element): DeviceMaintEvtsList {
    if (!_cached_decoder_for_DeviceMaintEvtsList) { _cached_decoder_for_DeviceMaintEvtsList = function (el: _Element): DeviceMaintEvtsList {
    let backInService: OPTIONAL<BackInService>;
    let deviceCapsChanged: OPTIONAL<DeviceCapsChanged>;
    let outOfService: OPTIONAL<OutOfService>;
    let partiallyInService: OPTIONAL<PartiallyInService>;
    const callbacks: $.DecodingMap = {
        "backInService": (_el: _Element): void => { backInService = $._decode_implicit<BackInService>(() => _decode_BackInService)(_el); },
        "deviceCapsChanged": (_el: _Element): void => { deviceCapsChanged = $._decode_implicit<DeviceCapsChanged>(() => _decode_DeviceCapsChanged)(_el); },
        "outOfService": (_el: _Element): void => { outOfService = $._decode_implicit<OutOfService>(() => _decode_OutOfService)(_el); },
        "partiallyInService": (_el: _Element): void => { partiallyInService = $._decode_implicit<PartiallyInService>(() => _decode_PartiallyInService)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeviceMaintEvtsList,
        _extension_additions_list_spec_for_DeviceMaintEvtsList,
        _root_component_type_list_2_spec_for_DeviceMaintEvtsList,
        undefined,
    );
    return new DeviceMaintEvtsList(
        backInService,
        deviceCapsChanged,
        outOfService,
        partiallyInService
    );
}; }
    return _cached_decoder_for_DeviceMaintEvtsList(el);
}

let _cached_encoder_for_DeviceMaintEvtsList: $.ASN1Encoder<DeviceMaintEvtsList> | null = null;

/**
 * @summary Encodes a(n) DeviceMaintEvtsList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceMaintEvtsList, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceMaintEvtsList (value: DeviceMaintEvtsList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceMaintEvtsList) { _cached_encoder_for_DeviceMaintEvtsList = function (value: DeviceMaintEvtsList, elGetter: $.ASN1Encoder<DeviceMaintEvtsList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.backInService === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_BackInService, $.BER)(value.backInService, $.BER)),
            /* IF_ABSENT  */ ((value.deviceCapsChanged === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_DeviceCapsChanged, $.BER)(value.deviceCapsChanged, $.BER)),
            /* IF_ABSENT  */ ((value.outOfService === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_OutOfService, $.BER)(value.outOfService, $.BER)),
            /* IF_ABSENT  */ ((value.partiallyInService === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_PartiallyInService, $.BER)(value.partiallyInService, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeviceMaintEvtsList(value, elGetter);
}


/* eslint-enable */
