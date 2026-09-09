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
import { DestinationRoutingAddress, _decode_DestinationRoutingAddress, _encode_DestinationRoutingAddress } from "../Core-INAP-CS1-DataTypes/DestinationRoutingAddress.ta.mjs";
// export { DestinationRoutingAddress, _decode_DestinationRoutingAddress, _encode_DestinationRoutingAddress } from "../Core-INAP-CS1-DataTypes/DestinationRoutingAddress.ta.mjs";
import { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../Core-INAP-CS1-DataTypes/AlertingPattern.ta.mjs";
// export { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../Core-INAP-CS1-DataTypes/AlertingPattern.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../Core-INAP-CS1-DataTypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../Core-INAP-CS1-DataTypes/CorrelationID.ta.mjs";
import { CutAndPaste, _decode_CutAndPaste, _encode_CutAndPaste } from "../Core-INAP-CS1-DataTypes/CutAndPaste.ta.mjs";
// export { CutAndPaste, _decode_CutAndPaste, _encode_CutAndPaste } from "../Core-INAP-CS1-DataTypes/CutAndPaste.ta.mjs";
import { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../Core-INAP-CS1-DataTypes/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../Core-INAP-CS1-DataTypes/OriginalCalledPartyID.ta.mjs";
import { RouteList, _decode_RouteList, _encode_RouteList } from "../Core-INAP-CS1-DataTypes/RouteList.ta.mjs";
// export { RouteList, _decode_RouteList, _encode_RouteList } from "../Core-INAP-CS1-DataTypes/RouteList.ta.mjs";
import { ScfID, _decode_ScfID, _encode_ScfID } from "../Core-INAP-CS1-DataTypes/ScfID.ta.mjs";
// export { ScfID, _decode_ScfID, _encode_ScfID } from "../Core-INAP-CS1-DataTypes/ScfID.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";
import { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../Core-INAP-CS1-DataTypes/ServiceInteractionIndicators.ta.mjs";
// export { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../Core-INAP-CS1-DataTypes/ServiceInteractionIndicators.ta.mjs";
import { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../Core-INAP-CS1-DataTypes/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../Core-INAP-CS1-DataTypes/CallingPartyNumber.ta.mjs";
import { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../Core-INAP-CS1-DataTypes/CallingPartysCategory.ta.mjs";
// export { CallingPartysCategory, _decode_CallingPartysCategory, _encode_CallingPartysCategory } from "../Core-INAP-CS1-DataTypes/CallingPartysCategory.ta.mjs";
import { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../Core-INAP-CS1-DataTypes/RedirectingPartyID.ta.mjs";
// export { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../Core-INAP-CS1-DataTypes/RedirectingPartyID.ta.mjs";
import { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../Core-INAP-CS1-DataTypes/RedirectionInformation.ta.mjs";
// export { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../Core-INAP-CS1-DataTypes/RedirectionInformation.ta.mjs";


/**
 * @summary ConnectArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectArg ::= SEQUENCE {
 *      destinationRoutingAddress     [0] DestinationRoutingAddress,
 *      alertingPattern     [1] AlertingPattern     OPTIONAL,
 *      correlationID     [2] CorrelationID     OPTIONAL,
 *      cutAndPaste     [3] CutAndPaste     OPTIONAL,
 *      originalCalledPartyID     [6] OriginalCalledPartyID     OPTIONAL,
 *      routeList     [7] RouteList     OPTIONAL,
 *      scfID     [8] ScfID     OPTIONAL,
 *      extensions     [10] SEQUENCE SIZE(1..numOfExtensions) OF ExtensionField     OPTIONAL,
 *      serviceInteractionIndicators     [26] ServiceInteractionIndicators     OPTIONAL,
 *      callingPartyNumber     [27] CallingPartyNumber     OPTIONAL,
 *      callingPartysCategory     [28] CallingPartysCategory     OPTIONAL,
 *      redirectingPartyID     [29] RedirectingPartyID     OPTIONAL,
 *      redirectionInformation     [30] RedirectionInformation     OPTIONAL
 * --  ...
 *      }
 * ```
 * 
 * @class
 */
export
class ConnectArg {
    constructor (
        /**
         * @summary `destinationRoutingAddress`.
         * @public
         * @readonly
         */
        readonly destinationRoutingAddress: DestinationRoutingAddress,
        /**
         * @summary `alertingPattern`.
         * @public
         * @readonly
         */
        readonly alertingPattern: OPTIONAL<AlertingPattern>,
        /**
         * @summary `correlationID`.
         * @public
         * @readonly
         */
        readonly correlationID: OPTIONAL<CorrelationID>,
        /**
         * @summary `cutAndPaste`.
         * @public
         * @readonly
         */
        readonly cutAndPaste: OPTIONAL<CutAndPaste>,
        /**
         * @summary `originalCalledPartyID`.
         * @public
         * @readonly
         */
        readonly originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>,
        /**
         * @summary `routeList`.
         * @public
         * @readonly
         */
        readonly routeList: OPTIONAL<RouteList>,
        /**
         * @summary `scfID`.
         * @public
         * @readonly
         */
        readonly scfID: OPTIONAL<ScfID>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>,
        /**
         * @summary `serviceInteractionIndicators`.
         * @public
         * @readonly
         */
        readonly serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>,
        /**
         * @summary `callingPartyNumber`.
         * @public
         * @readonly
         */
        readonly callingPartyNumber: OPTIONAL<CallingPartyNumber>,
        /**
         * @summary `callingPartysCategory`.
         * @public
         * @readonly
         */
        readonly callingPartysCategory: OPTIONAL<CallingPartysCategory>,
        /**
         * @summary `redirectingPartyID`.
         * @public
         * @readonly
         */
        readonly redirectingPartyID: OPTIONAL<RedirectingPartyID>,
        /**
         * @summary `redirectionInformation`.
         * @public
         * @readonly
         */
        readonly redirectionInformation: OPTIONAL<RedirectionInformation>
    ) {}

    /**
     * @summary Restructures an object into a ConnectArg
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectArg`.
     * @returns {ConnectArg}
     */
    public static _from_object (_o: { [_K in keyof (ConnectArg)]: (ConnectArg)[_K] }): ConnectArg {
        return new ConnectArg(_o.destinationRoutingAddress, _o.alertingPattern, _o.correlationID, _o.cutAndPaste, _o.originalCalledPartyID, _o.routeList, _o.scfID, _o.extensions, _o.serviceInteractionIndicators, _o.callingPartyNumber, _o.callingPartysCategory, _o.redirectingPartyID, _o.redirectionInformation);
    }


}

/**
 * @summary The Leading Root Component Types of ConnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectArg: $.ComponentSpec[] = [
    new $.ComponentSpec("destinationRoutingAddress", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("alertingPattern", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("correlationID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cutAndPaste", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("routeList", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("scfID", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("serviceInteractionIndicators", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("callingPartysCategory", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("redirectingPartyID", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("redirectionInformation", true, $.hasTag(_TagClass.context, 30))
];

/**
 * @summary The Trailing Root Component Types of ConnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectArg: $.ASN1Decoder<ConnectArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectArg (el: _Element): ConnectArg {
    if (!_cached_decoder_for_ConnectArg) { _cached_decoder_for_ConnectArg = function (el: _Element): ConnectArg {
    let destinationRoutingAddress!: DestinationRoutingAddress;
    let alertingPattern: OPTIONAL<AlertingPattern>;
    let correlationID: OPTIONAL<CorrelationID>;
    let cutAndPaste: OPTIONAL<CutAndPaste>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let routeList: OPTIONAL<RouteList>;
    let scfID: OPTIONAL<ScfID>;
    let extensions: OPTIONAL<ExtensionField[]>;
    let serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    let callingPartysCategory: OPTIONAL<CallingPartysCategory>;
    let redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    let redirectionInformation: OPTIONAL<RedirectionInformation>;
    const callbacks: $.DecodingMap = {
        "destinationRoutingAddress": (_el: _Element): void => { destinationRoutingAddress = $._decode_implicit<DestinationRoutingAddress>(() => _decode_DestinationRoutingAddress)(_el); },
        "alertingPattern": (_el: _Element): void => { alertingPattern = $._decode_implicit<AlertingPattern>(() => _decode_AlertingPattern)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "cutAndPaste": (_el: _Element): void => { cutAndPaste = $._decode_implicit<CutAndPaste>(() => _decode_CutAndPaste)(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_OriginalCalledPartyID)(_el); },
        "routeList": (_el: _Element): void => { routeList = $._decode_implicit<RouteList>(() => _decode_RouteList)(_el); },
        "scfID": (_el: _Element): void => { scfID = $._decode_implicit<ScfID>(() => _decode_ScfID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "serviceInteractionIndicators": (_el: _Element): void => { serviceInteractionIndicators = $._decode_implicit<ServiceInteractionIndicators>(() => _decode_ServiceInteractionIndicators)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); },
        "callingPartysCategory": (_el: _Element): void => { callingPartysCategory = $._decode_implicit<CallingPartysCategory>(() => _decode_CallingPartysCategory)(_el); },
        "redirectingPartyID": (_el: _Element): void => { redirectingPartyID = $._decode_implicit<RedirectingPartyID>(() => _decode_RedirectingPartyID)(_el); },
        "redirectionInformation": (_el: _Element): void => { redirectionInformation = $._decode_implicit<RedirectionInformation>(() => _decode_RedirectionInformation)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConnectArg,
        _extension_additions_list_spec_for_ConnectArg,
        _root_component_type_list_2_spec_for_ConnectArg,
        undefined,
    );
    return new ConnectArg(
        destinationRoutingAddress,
        alertingPattern,
        correlationID,
        cutAndPaste,
        originalCalledPartyID,
        routeList,
        scfID,
        extensions,
        serviceInteractionIndicators,
        callingPartyNumber,
        callingPartysCategory,
        redirectingPartyID,
        redirectionInformation
    );
}; }
    return _cached_decoder_for_ConnectArg(el);
}

let _cached_encoder_for_ConnectArg: $.ASN1Encoder<ConnectArg> | null = null;

/**
 * @summary Encodes a(n) ConnectArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectArg, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectArg (value: ConnectArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectArg) { _cached_encoder_for_ConnectArg = function (value: ConnectArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DestinationRoutingAddress, $.BER)(value.destinationRoutingAddress, $.BER),
            /* IF_ABSENT  */ ((value.alertingPattern === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_AlertingPattern, $.BER)(value.alertingPattern, $.BER)),
            /* IF_ABSENT  */ ((value.correlationID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER)),
            /* IF_ABSENT  */ ((value.cutAndPaste === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CutAndPaste, $.BER)(value.cutAndPaste, $.BER)),
            /* IF_ABSENT  */ ((value.originalCalledPartyID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_OriginalCalledPartyID, $.BER)(value.originalCalledPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.routeList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_RouteList, $.BER)(value.routeList, $.BER)),
            /* IF_ABSENT  */ ((value.scfID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_ScfID, $.BER)(value.scfID, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER)),
            /* IF_ABSENT  */ ((value.serviceInteractionIndicators === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => _encode_ServiceInteractionIndicators, $.BER)(value.serviceInteractionIndicators, $.BER)),
            /* IF_ABSENT  */ ((value.callingPartyNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 27, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER)),
            /* IF_ABSENT  */ ((value.callingPartysCategory === undefined) ? undefined : $._encode_implicit(_TagClass.context, 28, () => _encode_CallingPartysCategory, $.BER)(value.callingPartysCategory, $.BER)),
            /* IF_ABSENT  */ ((value.redirectingPartyID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 29, () => _encode_RedirectingPartyID, $.BER)(value.redirectingPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.redirectionInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 30, () => _encode_RedirectionInformation, $.BER)(value.redirectionInformation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConnectArg(value, elGetter);
}


/* eslint-enable */
