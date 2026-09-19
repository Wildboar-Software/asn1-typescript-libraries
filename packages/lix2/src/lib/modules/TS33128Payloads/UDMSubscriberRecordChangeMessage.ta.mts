/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { ServiceID, _decode_ServiceID, _encode_ServiceID } from "../TS33128Payloads/ServiceID.ta.mjs";
// export { ServiceID, _decode_ServiceID, _encode_ServiceID } from "../TS33128Payloads/ServiceID.ta.mjs";
import { UDMSubscriberRecordChangeMethod, _decode_UDMSubscriberRecordChangeMethod, _encode_UDMSubscriberRecordChangeMethod, _enum_for_UDMSubscriberRecordChangeMethod } from "../TS33128Payloads/UDMSubscriberRecordChangeMethod.ta.mjs";
// export { UDMSubscriberRecordChangeMethod, _enum_for_UDMSubscriberRecordChangeMethod, UDMSubscriberRecordChangeMethod_pEIChange /* IMPORTED_LONG_ENUMERATION_ITEM */, pEIChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMSubscriberRecordChangeMethod_sUPIChange /* IMPORTED_LONG_ENUMERATION_ITEM */, sUPIChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMSubscriberRecordChangeMethod_gPSIChange /* IMPORTED_LONG_ENUMERATION_ITEM */, gPSIChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMSubscriberRecordChangeMethod_uEDeprovisioning /* IMPORTED_LONG_ENUMERATION_ITEM */, uEDeprovisioning /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMSubscriberRecordChangeMethod_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMSubscriberRecordChangeMethod_serviceIDChange /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceIDChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMSubscriberRecordChangeMethod_multipleIDChanges /* IMPORTED_LONG_ENUMERATION_ITEM */, multipleIDChanges /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UDMSubscriberRecordChangeMethod, _encode_UDMSubscriberRecordChangeMethod } from "../TS33128Payloads/UDMSubscriberRecordChangeMethod.ta.mjs";


/**
 * @summary UDMSubscriberRecordChangeMessage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMSubscriberRecordChangeMessage ::= SEQUENCE
 * {
 *     sUPI                           [1] SUPI OPTIONAL,
 *     pEI                            [2] PEI OPTIONAL,
 *     gPSI                           [3] GPSI OPTIONAL,
 *     oldPEI                         [4] PEI OPTIONAL,
 *     oldSUPI                        [5] SUPI OPTIONAL,
 *     oldGPSI                        [6] GPSI OPTIONAL,
 *     oldserviceID                   [7] ServiceID OPTIONAL,
 *     subscriberRecordChangeMethod   [8] UDMSubscriberRecordChangeMethod,
 *     serviceID                      [9] ServiceID OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class UDMSubscriberRecordChangeMessage {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: OPTIONAL<SUPI>,
        /**
         * @summary `pEI`.
         * @public
         * @readonly
         */
        readonly pEI: OPTIONAL<PEI>,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: OPTIONAL<GPSI>,
        /**
         * @summary `oldPEI`.
         * @public
         * @readonly
         */
        readonly oldPEI: OPTIONAL<PEI>,
        /**
         * @summary `oldSUPI`.
         * @public
         * @readonly
         */
        readonly oldSUPI: OPTIONAL<SUPI>,
        /**
         * @summary `oldGPSI`.
         * @public
         * @readonly
         */
        readonly oldGPSI: OPTIONAL<GPSI>,
        /**
         * @summary `oldserviceID`.
         * @public
         * @readonly
         */
        readonly oldserviceID: OPTIONAL<ServiceID>,
        /**
         * @summary `subscriberRecordChangeMethod`.
         * @public
         * @readonly
         */
        readonly subscriberRecordChangeMethod: UDMSubscriberRecordChangeMethod,
        /**
         * @summary `serviceID`.
         * @public
         * @readonly
         */
        readonly serviceID: OPTIONAL<ServiceID>
    ) {}

    /**
     * @summary Restructures an object into a UDMSubscriberRecordChangeMessage
     * @description
     * 
     * This takes an `object` and converts it to a `UDMSubscriberRecordChangeMessage`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UDMSubscriberRecordChangeMessage`.
     * @returns {UDMSubscriberRecordChangeMessage}
     */
    public static _from_object (_o: { [_K in keyof (UDMSubscriberRecordChangeMessage)]: (UDMSubscriberRecordChangeMessage)[_K] }): UDMSubscriberRecordChangeMessage {
        return new UDMSubscriberRecordChangeMessage(_o.sUPI, _o.pEI, _o.gPSI, _o.oldPEI, _o.oldSUPI, _o.oldGPSI, _o.oldserviceID, _o.subscriberRecordChangeMethod, _o.serviceID);
    }

        /**
         * @summary The enum used as the type of the component `subscriberRecordChangeMethod`
         * @public
         * @static
         */

    public static _enum_for_subscriberRecordChangeMethod = _enum_for_UDMSubscriberRecordChangeMethod;
}

/**
 * @summary The Leading Root Component Types of UDMSubscriberRecordChangeMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UDMSubscriberRecordChangeMessage: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("oldPEI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("oldSUPI", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("oldGPSI", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("oldserviceID", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("subscriberRecordChangeMethod", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("serviceID", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of UDMSubscriberRecordChangeMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UDMSubscriberRecordChangeMessage: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UDMSubscriberRecordChangeMessage
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UDMSubscriberRecordChangeMessage: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UDMSubscriberRecordChangeMessage: $.ASN1Decoder<UDMSubscriberRecordChangeMessage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMSubscriberRecordChangeMessage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMSubscriberRecordChangeMessage (el: _Element): UDMSubscriberRecordChangeMessage {
    if (!_cached_decoder_for_UDMSubscriberRecordChangeMessage) { _cached_decoder_for_UDMSubscriberRecordChangeMessage = function (el: _Element): UDMSubscriberRecordChangeMessage {
    let sUPI: OPTIONAL<SUPI>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let oldPEI: OPTIONAL<PEI>;
    let oldSUPI: OPTIONAL<SUPI>;
    let oldGPSI: OPTIONAL<GPSI>;
    let oldserviceID: OPTIONAL<ServiceID>;
    let subscriberRecordChangeMethod!: UDMSubscriberRecordChangeMethod;
    let serviceID: OPTIONAL<ServiceID>;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "oldPEI": (_el: _Element): void => { oldPEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "oldSUPI": (_el: _Element): void => { oldSUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "oldGPSI": (_el: _Element): void => { oldGPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "oldserviceID": (_el: _Element): void => { oldserviceID = $._decode_implicit<ServiceID>(() => _decode_ServiceID)(_el); },
        "subscriberRecordChangeMethod": (_el: _Element): void => { subscriberRecordChangeMethod = $._decode_implicit<UDMSubscriberRecordChangeMethod>(() => _decode_UDMSubscriberRecordChangeMethod)(_el); },
        "serviceID": (_el: _Element): void => { serviceID = $._decode_implicit<ServiceID>(() => _decode_ServiceID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_UDMSubscriberRecordChangeMessage,
        _extension_additions_list_spec_for_UDMSubscriberRecordChangeMessage,
        _root_component_type_list_2_spec_for_UDMSubscriberRecordChangeMessage,
        undefined,
    );
    return new UDMSubscriberRecordChangeMessage(
        sUPI,
        pEI,
        gPSI,
        oldPEI,
        oldSUPI,
        oldGPSI,
        oldserviceID,
        subscriberRecordChangeMethod,
        serviceID
    );
}; }
    return _cached_decoder_for_UDMSubscriberRecordChangeMessage(el);
}

let _cached_encoder_for_UDMSubscriberRecordChangeMessage: $.ASN1Encoder<UDMSubscriberRecordChangeMessage> | null = null;

/**
 * @summary Encodes a(n) UDMSubscriberRecordChangeMessage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMSubscriberRecordChangeMessage, encoded as an ASN.1 Element.
 */
export
function _encode_UDMSubscriberRecordChangeMessage (value: UDMSubscriberRecordChangeMessage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMSubscriberRecordChangeMessage) { _cached_encoder_for_UDMSubscriberRecordChangeMessage = function (value: UDMSubscriberRecordChangeMessage, elGetter: $.ASN1Encoder<UDMSubscriberRecordChangeMessage>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.sUPI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER)),
            /* IF_ABSENT  */ ((value.pEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_PEI, $.BER)(value.pEI, $.BER)),
            /* IF_ABSENT  */ ((value.gPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_GPSI, $.BER)(value.gPSI, $.BER)),
            /* IF_ABSENT  */ ((value.oldPEI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => _encode_PEI, $.BER)(value.oldPEI, $.BER)),
            /* IF_ABSENT  */ ((value.oldSUPI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_SUPI, $.BER)(value.oldSUPI, $.BER)),
            /* IF_ABSENT  */ ((value.oldGPSI === undefined) ? undefined : $._encode_explicit(_TagClass.context, 6, () => _encode_GPSI, $.BER)(value.oldGPSI, $.BER)),
            /* IF_ABSENT  */ ((value.oldserviceID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_ServiceID, $.BER)(value.oldserviceID, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => _encode_UDMSubscriberRecordChangeMethod, $.BER)(value.subscriberRecordChangeMethod, $.BER),
            /* IF_ABSENT  */ ((value.serviceID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_ServiceID, $.BER)(value.serviceID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UDMSubscriberRecordChangeMessage(value, elGetter);
}


/* eslint-enable */
