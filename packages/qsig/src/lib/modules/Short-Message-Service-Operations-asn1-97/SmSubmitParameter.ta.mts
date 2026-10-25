/* eslint-disable */
import {
    type BOOLEAN,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ProtocolIdentifier, _decode_ProtocolIdentifier, _encode_ProtocolIdentifier } from "../Short-Message-Service-Operations-asn1-97/ProtocolIdentifier.ta.mjs";
import { type ValidityPeriod, _decode_ValidityPeriod, _encode_ValidityPeriod } from "../Short-Message-Service-Operations-asn1-97/ValidityPeriod.ta.mjs";

/**
 * @summary SmSubmitParameter
 * @description
 *
 * Per-message parameters of `smsSubmit` (ECMA-325 §E.1.2). The Service Centre
 * stores them with the Short Message (§6.5.3.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SmSubmitParameter ::= SEQUENCE {
 *     protocolIdentifier ProtocolIdentifier,
 *     validityPeriod ValidityPeriod OPTIONAL,
 *     statusReportRequest [11] IMPLICIT BOOLEAN DEFAULT FALSE,
 *     replyPath [12] IMPLICIT BOOLEAN DEFAULT FALSE,
 *     rejectDuplicates [13] IMPLICIT BOOLEAN DEFAULT FALSE
 * }
 * ```
 * 
 * @class
 */
export
class SmSubmitParameter {
    /**
     * @summary `protocolIdentifier`.
     * @description
     *
     * Higher-layer protocol, telematic interworking, a replace code, or
     * `shortMessageType0`. Simple transfer uses 0 (`noIw`) (ECMA-325 §E.1.2.1).
     * @public
     * @readonly
     */
    readonly protocolIdentifier: ProtocolIdentifier;
    /**
     * @summary `validityPeriod`.
     * @description
     *
     * How long the Service Centre keeps the Short Message and keeps trying to
     * deliver it. After expiry the Short Message is deleted (ECMA-325
     * §E.1.2.2). If omitted, the Service Centre uses an implementation-specific
     * default (§6.5.3.2.1 NOTE 6).
     * @public
     * @readonly
     */
    readonly validityPeriod: OPTIONAL<ValidityPeriod>;
    /**
     * @summary `statusReportRequest`.
     * @description
     *
     * Default FALSE. TRUE asks the Service Centre for Status Reports about this
     * Short Message (ECMA-325 §E.1.2.3). It also enables
     * `smscControlParameterHeader` (§E.1.3.1.1). The Service Centre combines
     * this flag with that header; if the header is absent, every header
     * condition is treated as requested (§6.5.3.1.1).
     * @public
     * @readonly
     */
    readonly statusReportRequest: OPTIONAL<BOOLEAN>;
    /**
     * @summary `replyPath`.
     * @description
     *
     * Default FALSE. TRUE asks the Service Centre to carry a reply Short
     * Message through this same Service Centre (ECMA-325 §E.1.2.4). Both this
     * Service Centre and the Receiving User PINX must support reply path. The
     * reply goes to this Service Centre; the Receiving User's own Service
     * Centre is not used. On `smsDeliver` the Service Centre sets the flag TRUE
     * only when it supports reply path (§6.5.3.1.1).
     * @public
     * @readonly
     */
    readonly replyPath: OPTIONAL<BOOLEAN>;
    /**
     * @summary `rejectDuplicates`.
     * @description
     *
     * Default FALSE. TRUE tells the Service Centre to reject a Short Message
     * that repeats `messageReference` and `destinationAddress` from the same
     * `originatingAddress`, with cause `smRejectedDuplicateSM` (ECMA-325
     * §6.5.3.2.1, §E.1.2.5). FALSE accepts that duplicate and does not
     * overwrite the stored Short Message. Replacement uses a replace
     * `protocolIdentifier`, not this flag. The same `messageReference` from the
     * same Sending User with a different destination is rejected even when this
     * flag is FALSE (§6.5.3.2.1). Annex E.1.2.5 calls the failure an
     * `smsDeliver` return error; §6.5.3.2.1 returns `smsSubmit` error.
     * @public
     * @readonly
     */
    readonly rejectDuplicates: OPTIONAL<BOOLEAN>;

    constructor (
        protocolIdentifier: ProtocolIdentifier,
        validityPeriod?: OPTIONAL<ValidityPeriod>,
        statusReportRequest?: OPTIONAL<BOOLEAN>,
        replyPath?: OPTIONAL<BOOLEAN>,
        rejectDuplicates?: OPTIONAL<BOOLEAN>
    ) {
        this.protocolIdentifier = protocolIdentifier;
        this.validityPeriod = validityPeriod;
        this.statusReportRequest = statusReportRequest;
        this.replyPath = replyPath;
        this.rejectDuplicates = rejectDuplicates;
    }

    /**
     * @summary Restructures an object into a SmSubmitParameter
     * @description
     * 
     * This takes an `object` and converts it to a `SmSubmitParameter`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SmSubmitParameter`.
     * @returns {SmSubmitParameter}
     */
    public static _from_object (_o: { [_K in keyof (SmSubmitParameter)]: (SmSubmitParameter)[_K] }): SmSubmitParameter {
        return new SmSubmitParameter(_o.protocolIdentifier, _o.validityPeriod, _o.statusReportRequest, _o.replyPath, _o.rejectDuplicates);
    }

    /**
     * @summary Getter that returns the default value for `statusReportRequest`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_statusReportRequest () { return false; }
    /**
     * @summary Getter that returns the default value for `replyPath`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_replyPath () { return false; }
    /**
     * @summary Getter that returns the default value for `rejectDuplicates`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_rejectDuplicates () { return false; }
}

/**
 * @summary The Leading Root Component Types of SmSubmitParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SmSubmitParameter: $.ComponentSpec[] = [
    new $.ComponentSpec("protocolIdentifier", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("validityPeriod", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2))),
    new $.ComponentSpec("statusReportRequest", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("replyPath", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("rejectDuplicates", true, $.hasTag(_TagClass.context, 13))
];

/**
 * @summary The Trailing Root Component Types of SmSubmitParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SmSubmitParameter: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SmSubmitParameter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SmSubmitParameter: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SmSubmitParameter: $.ASN1Decoder<SmSubmitParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SmSubmitParameter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SmSubmitParameter (el: _Element): SmSubmitParameter {
    if (!_cached_decoder_for_SmSubmitParameter) { _cached_decoder_for_SmSubmitParameter = function (el: _Element): SmSubmitParameter {
    let protocolIdentifier!: ProtocolIdentifier;
    let validityPeriod: OPTIONAL<ValidityPeriod>;
    let statusReportRequest: OPTIONAL<BOOLEAN> = SmSubmitParameter._default_value_for_statusReportRequest;
    let replyPath: OPTIONAL<BOOLEAN> = SmSubmitParameter._default_value_for_replyPath;
    let rejectDuplicates: OPTIONAL<BOOLEAN> = SmSubmitParameter._default_value_for_rejectDuplicates;
    const callbacks: $.DecodingMap = {
        "protocolIdentifier": (_el: _Element): void => { protocolIdentifier = _decode_ProtocolIdentifier(_el); },
        "validityPeriod": (_el: _Element): void => { validityPeriod = _decode_ValidityPeriod(_el); },
        "statusReportRequest": (_el: _Element): void => { statusReportRequest = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "replyPath": (_el: _Element): void => { replyPath = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "rejectDuplicates": (_el: _Element): void => { rejectDuplicates = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SmSubmitParameter,
        _extension_additions_list_spec_for_SmSubmitParameter,
        _root_component_type_list_2_spec_for_SmSubmitParameter,
        undefined,
    );
    return new SmSubmitParameter(
        protocolIdentifier,
        validityPeriod,
        statusReportRequest,
        replyPath,
        rejectDuplicates
    );
}; }
    return _cached_decoder_for_SmSubmitParameter(el);
}

let _cached_encoder_for_SmSubmitParameter: $.ASN1Encoder<SmSubmitParameter> | null = null;

/**
 * @summary Encodes a(n) SmSubmitParameter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SmSubmitParameter, encoded as an ASN.1 Element.
 */
export
function _encode_SmSubmitParameter (value: SmSubmitParameter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SmSubmitParameter) { _cached_encoder_for_SmSubmitParameter = function (value: SmSubmitParameter, _elGetter: $.ASN1Encoder<SmSubmitParameter>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_ProtocolIdentifier(value.protocolIdentifier, $.BER));
    if (value.validityPeriod !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_ValidityPeriod(value.validityPeriod, $.BER));
    }
    if (value.statusReportRequest !== undefined && !$.deepEq(value.statusReportRequest, SmSubmitParameter._default_value_for_statusReportRequest)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 11, () => $._encodeBoolean, $.BER)(value.statusReportRequest, $.BER));
    }
    if (value.replyPath !== undefined && !$.deepEq(value.replyPath, SmSubmitParameter._default_value_for_replyPath)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 12, () => $._encodeBoolean, $.BER)(value.replyPath, $.BER));
    }
    if (value.rejectDuplicates !== undefined && !$.deepEq(value.rejectDuplicates, SmSubmitParameter._default_value_for_rejectDuplicates)) {
        _components.push(/* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 13, () => $._encodeBoolean, $.BER)(value.rejectDuplicates, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SmSubmitParameter(value, elGetter);
}

/* eslint-enable */
