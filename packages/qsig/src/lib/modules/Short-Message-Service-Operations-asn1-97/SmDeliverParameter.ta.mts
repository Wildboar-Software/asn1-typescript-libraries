/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProtocolIdentifier, _decode_ProtocolIdentifier, _encode_ProtocolIdentifier } from "../Short-Message-Service-Operations-asn1-97/ProtocolIdentifier.ta.mjs";
import { ServiceCentreTimeStamp, _decode_ServiceCentreTimeStamp, _encode_ServiceCentreTimeStamp } from "../Short-Message-Service-Operations-asn1-97/ServiceCentreTimeStamp.ta.mjs";

/**
 * @summary SmDeliverParameter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SmDeliverParameter ::= SEQUENCE {
 *     protocolIdentifier ProtocolIdentifier,
 *     serviceCentreTimeStamp ServiceCentreTimeStamp,
 *     priority [11] IMPLICIT BOOLEAN DEFAULT FALSE,
 *     moreMessagesToSend [12] IMPLICIT BOOLEAN DEFAULT FALSE,
 *     statusReportIndication [13] IMPLICIT BOOLEAN DEFAULT FALSE,
 *     replyPath [14] IMPLICIT BOOLEAN DEFAULT FALSE
 * }
 * ```
 * 
 * @class
 */
export
class SmDeliverParameter {
    /**
     * @summary `protocolIdentifier`.
     * @public
     * @readonly
     */
    readonly protocolIdentifier: ProtocolIdentifier;
    /**
     * @summary `serviceCentreTimeStamp`.
     * @public
     * @readonly
     */
    readonly serviceCentreTimeStamp: ServiceCentreTimeStamp;
    /**
     * @summary `priority`.
     * @public
     * @readonly
     */
    readonly priority: OPTIONAL<BOOLEAN>;
    /**
     * @summary `moreMessagesToSend`.
     * @public
     * @readonly
     */
    readonly moreMessagesToSend: OPTIONAL<BOOLEAN>;
    /**
     * @summary `statusReportIndication`.
     * @public
     * @readonly
     */
    readonly statusReportIndication: OPTIONAL<BOOLEAN>;
    /**
     * @summary `replyPath`.
     * @public
     * @readonly
     */
    readonly replyPath: OPTIONAL<BOOLEAN>;

    constructor (
        protocolIdentifier: ProtocolIdentifier,
        serviceCentreTimeStamp: ServiceCentreTimeStamp,
        priority: OPTIONAL<BOOLEAN>,
        moreMessagesToSend: OPTIONAL<BOOLEAN>,
        statusReportIndication: OPTIONAL<BOOLEAN>,
        replyPath: OPTIONAL<BOOLEAN>
    ) {
        this.protocolIdentifier = protocolIdentifier;
        this.serviceCentreTimeStamp = serviceCentreTimeStamp;
        this.priority = priority;
        this.moreMessagesToSend = moreMessagesToSend;
        this.statusReportIndication = statusReportIndication;
        this.replyPath = replyPath;
    }

    /**
     * @summary Restructures an object into a SmDeliverParameter
     * @description
     * 
     * This takes an `object` and converts it to a `SmDeliverParameter`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SmDeliverParameter`.
     * @returns {SmDeliverParameter}
     */
    public static _from_object (_o: { [_K in keyof (SmDeliverParameter)]: (SmDeliverParameter)[_K] }): SmDeliverParameter {
        return new SmDeliverParameter(_o.protocolIdentifier, _o.serviceCentreTimeStamp, _o.priority, _o.moreMessagesToSend, _o.statusReportIndication, _o.replyPath);
    }

    /**
     * @summary Getter that returns the default value for `priority`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_priority () { return false; }
    /**
     * @summary Getter that returns the default value for `moreMessagesToSend`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_moreMessagesToSend () { return false; }
    /**
     * @summary Getter that returns the default value for `statusReportIndication`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_statusReportIndication () { return false; }
    /**
     * @summary Getter that returns the default value for `replyPath`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_replyPath () { return false; }
}

/**
 * @summary The Leading Root Component Types of SmDeliverParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SmDeliverParameter: $.ComponentSpec[] = [
    new $.ComponentSpec("protocolIdentifier", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("serviceCentreTimeStamp", false, $.hasTag(_TagClass.universal, 24)),
    new $.ComponentSpec("priority", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("moreMessagesToSend", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("statusReportIndication", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("replyPath", true, $.hasTag(_TagClass.context, 14))
];

/**
 * @summary The Trailing Root Component Types of SmDeliverParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SmDeliverParameter: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SmDeliverParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SmDeliverParameter: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SmDeliverParameter: $.ASN1Decoder<SmDeliverParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SmDeliverParameter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SmDeliverParameter (el: _Element): SmDeliverParameter {
    if (!_cached_decoder_for_SmDeliverParameter) { _cached_decoder_for_SmDeliverParameter = function (el: _Element): SmDeliverParameter {
    let protocolIdentifier!: ProtocolIdentifier;
    let serviceCentreTimeStamp!: ServiceCentreTimeStamp;
    let priority: OPTIONAL<BOOLEAN> = SmDeliverParameter._default_value_for_priority;
    let moreMessagesToSend: OPTIONAL<BOOLEAN> = SmDeliverParameter._default_value_for_moreMessagesToSend;
    let statusReportIndication: OPTIONAL<BOOLEAN> = SmDeliverParameter._default_value_for_statusReportIndication;
    let replyPath: OPTIONAL<BOOLEAN> = SmDeliverParameter._default_value_for_replyPath;
    const callbacks: $.DecodingMap = {
        "protocolIdentifier": (_el: _Element): void => { protocolIdentifier = _decode_ProtocolIdentifier(_el); },
        "serviceCentreTimeStamp": (_el: _Element): void => { serviceCentreTimeStamp = _decode_ServiceCentreTimeStamp(_el); },
        "priority": (_el: _Element): void => { priority = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "moreMessagesToSend": (_el: _Element): void => { moreMessagesToSend = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "statusReportIndication": (_el: _Element): void => { statusReportIndication = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "replyPath": (_el: _Element): void => { replyPath = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SmDeliverParameter,
        _extension_additions_list_spec_for_SmDeliverParameter,
        _root_component_type_list_2_spec_for_SmDeliverParameter,
        undefined,
    );
    return new SmDeliverParameter(
        protocolIdentifier,
        serviceCentreTimeStamp,
        priority,
        moreMessagesToSend,
        statusReportIndication,
        replyPath
    );
}; }
    return _cached_decoder_for_SmDeliverParameter(el);
}

let _cached_encoder_for_SmDeliverParameter: $.ASN1Encoder<SmDeliverParameter> | null = null;

/**
 * @summary Encodes a(n) SmDeliverParameter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SmDeliverParameter, encoded as an ASN.1 Element.
 */
export
function _encode_SmDeliverParameter (value: SmDeliverParameter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SmDeliverParameter) { _cached_encoder_for_SmDeliverParameter = function (value: SmDeliverParameter, _elGetter: $.ASN1Encoder<SmDeliverParameter>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_ProtocolIdentifier(value.protocolIdentifier, $.BER));
    _components.push(/* REQUIRED   */ _encode_ServiceCentreTimeStamp(value.serviceCentreTimeStamp, $.BER));
    if (value.priority !== undefined && !$.deepEq(value.priority, SmDeliverParameter._default_value_for_priority)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 11, () => $._encodeBoolean, $.BER)(value.priority, $.BER));
    }
    if (value.moreMessagesToSend !== undefined && !$.deepEq(value.moreMessagesToSend, SmDeliverParameter._default_value_for_moreMessagesToSend)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 12, () => $._encodeBoolean, $.BER)(value.moreMessagesToSend, $.BER));
    }
    if (value.statusReportIndication !== undefined && !$.deepEq(value.statusReportIndication, SmDeliverParameter._default_value_for_statusReportIndication)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 13, () => $._encodeBoolean, $.BER)(value.statusReportIndication, $.BER));
    }
    if (value.replyPath !== undefined && !$.deepEq(value.replyPath, SmDeliverParameter._default_value_for_replyPath)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 14, () => $._encodeBoolean, $.BER)(value.replyPath, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SmDeliverParameter(value, elGetter);
}

/* eslint-enable */
