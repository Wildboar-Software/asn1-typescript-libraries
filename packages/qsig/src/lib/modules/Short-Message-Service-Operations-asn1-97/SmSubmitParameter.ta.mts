/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ProtocolIdentifier, _decode_ProtocolIdentifier, _encode_ProtocolIdentifier } from "../Short-Message-Service-Operations-asn1-97/ProtocolIdentifier.ta.mjs";
import { ValidityPeriod, _decode_ValidityPeriod, _encode_ValidityPeriod } from "../Short-Message-Service-Operations-asn1-97/ValidityPeriod.ta.mjs";

/**
 * @summary SmSubmitParameter
 * @description
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
     * @public
     * @readonly
     */
    readonly protocolIdentifier: ProtocolIdentifier;
    /**
     * @summary `validityPeriod`.
     * @public
     * @readonly
     */
    readonly validityPeriod: OPTIONAL<ValidityPeriod>;
    /**
     * @summary `statusReportRequest`.
     * @public
     * @readonly
     */
    readonly statusReportRequest: OPTIONAL<BOOLEAN>;
    /**
     * @summary `replyPath`.
     * @public
     * @readonly
     */
    readonly replyPath: OPTIONAL<BOOLEAN>;
    /**
     * @summary `rejectDuplicates`.
     * @public
     * @readonly
     */
    readonly rejectDuplicates: OPTIONAL<BOOLEAN>;

    constructor (
        protocolIdentifier: ProtocolIdentifier,
        validityPeriod: OPTIONAL<ValidityPeriod>,
        statusReportRequest: OPTIONAL<BOOLEAN>,
        replyPath: OPTIONAL<BOOLEAN>,
        rejectDuplicates: OPTIONAL<BOOLEAN>
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
    if (!_cached_encoder_for_SmSubmitParameter) { _cached_encoder_for_SmSubmitParameter = function (value: SmSubmitParameter, elGetter: $.ASN1Encoder<SmSubmitParameter>): _Element {
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
