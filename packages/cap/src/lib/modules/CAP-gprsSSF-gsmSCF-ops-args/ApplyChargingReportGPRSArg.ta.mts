/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
import { type ChargingResult, _decode_ChargingResult, _encode_ChargingResult } from "../CAP-datatypes/ChargingResult.ta.mjs";
import { type ChargingRollOver, _decode_ChargingRollOver, _encode_ChargingRollOver } from "../CAP-datatypes/ChargingRollOver.ta.mjs";
import { type PDPID, _decode_PDPID, _encode_PDPID } from "../CAP-datatypes/PDPID.ta.mjs";
import { QualityOfService, _decode_QualityOfService, _encode_QualityOfService } from "../CAP-datatypes/QualityOfService.ta.mjs";



/**
 * @summary ApplyChargingReportGPRSArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplyChargingReportGPRSArg ::= SEQUENCE {
 *     chargingResult            [0] ChargingResult,
 *     qualityOfService            [1] QualityOfService            OPTIONAL,
 *     active                [2] BOOLEAN DEFAULT TRUE,
 *     pDPID                [3] PDPID                    OPTIONAL,
 *     ...,
 *     chargingRollOver            [4]    ChargingRollOver            OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class ApplyChargingReportGPRSArg {
    constructor (
        /**
         * @summary `chargingResult`.
         * @public
         * @readonly
         */
        readonly chargingResult: ChargingResult,
        /**
         * @summary `qualityOfService`.
         * @public
         * @readonly
         */
        readonly qualityOfService: OPTIONAL<QualityOfService>,
        /**
         * @summary `active`.
         * @public
         * @readonly
         */
        readonly active: OPTIONAL<BOOLEAN>,
        /**
         * @summary `pDPID`.
         * @public
         * @readonly
         */
        readonly pDPID: OPTIONAL<PDPID>,
        /**
         * @summary `chargingRollOver`.
         * @public
         * @readonly
         */
        readonly chargingRollOver: OPTIONAL<ChargingRollOver>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ApplyChargingReportGPRSArg
     * @description
     * 
     * This takes an `object` and converts it to a `ApplyChargingReportGPRSArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ApplyChargingReportGPRSArg`.
     * @returns {ApplyChargingReportGPRSArg}
     */
    public static _from_object (_o: { [_K in keyof (ApplyChargingReportGPRSArg)]: (ApplyChargingReportGPRSArg)[_K] }): ApplyChargingReportGPRSArg {
        return new ApplyChargingReportGPRSArg(_o.chargingResult, _o.qualityOfService, _o.active, _o.pDPID, _o.chargingRollOver, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `active`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_active () { return true; }
}

/**
 * @summary The Leading Root Component Types of ApplyChargingReportGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ApplyChargingReportGPRSArg: $.ComponentSpec[] = [
    new $.ComponentSpec("chargingResult", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("qualityOfService", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("active", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pDPID", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ApplyChargingReportGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ApplyChargingReportGPRSArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ApplyChargingReportGPRSArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ApplyChargingReportGPRSArg: $.ComponentSpec[] = [
    new $.ComponentSpec("chargingRollOver", true, $.hasTag(_TagClass.context, 4))
];

let _cached_decoder_for_ApplyChargingReportGPRSArg: $.ASN1Decoder<ApplyChargingReportGPRSArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplyChargingReportGPRSArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ApplyChargingReportGPRSArg (el: _Element): ApplyChargingReportGPRSArg {
    if (!_cached_decoder_for_ApplyChargingReportGPRSArg) { _cached_decoder_for_ApplyChargingReportGPRSArg = function (el: _Element): ApplyChargingReportGPRSArg {
    let chargingResult!: ChargingResult;
    let qualityOfService: OPTIONAL<QualityOfService>;
    let active: OPTIONAL<BOOLEAN> = ApplyChargingReportGPRSArg._default_value_for_active;
    let pDPID: OPTIONAL<PDPID>;
    let chargingRollOver: OPTIONAL<ChargingRollOver>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "chargingResult": (_el: _Element): void => { chargingResult = $._decode_implicit<ChargingResult>(() => _decode_ChargingResult)(_el); },
        "qualityOfService": (_el: _Element): void => { qualityOfService = $._decode_implicit<QualityOfService>(() => _decode_QualityOfService)(_el); },
        "active": (_el: _Element): void => { active = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "pDPID": (_el: _Element): void => { pDPID = $._decode_implicit<PDPID>(() => _decode_PDPID)(_el); },
        "chargingRollOver": (_el: _Element): void => { chargingRollOver = $._decode_implicit<ChargingRollOver>(() => _decode_ChargingRollOver)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ApplyChargingReportGPRSArg,
        _extension_additions_list_spec_for_ApplyChargingReportGPRSArg,
        _root_component_type_list_2_spec_for_ApplyChargingReportGPRSArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ApplyChargingReportGPRSArg(
        chargingResult,
        qualityOfService,
        active,
        pDPID,
        chargingRollOver,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ApplyChargingReportGPRSArg(el);
}

let _cached_encoder_for_ApplyChargingReportGPRSArg: $.ASN1Encoder<ApplyChargingReportGPRSArg> | null = null;

/**
 * @summary Encodes a(n) ApplyChargingReportGPRSArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplyChargingReportGPRSArg, encoded as an ASN.1 Element.
 */
export
function _encode_ApplyChargingReportGPRSArg (value: ApplyChargingReportGPRSArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ApplyChargingReportGPRSArg) { _cached_encoder_for_ApplyChargingReportGPRSArg = function (value: ApplyChargingReportGPRSArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ChargingResult, $.BER)(value.chargingResult, $.BER),
            /* IF_ABSENT  */ ((value.qualityOfService === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_QualityOfService, $.BER)(value.qualityOfService, $.BER)),
            /* IF_DEFAULT */ (value.active === undefined || $.deepEq(value.active, ApplyChargingReportGPRSArg._default_value_for_active) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.active, $.BER)),
            /* IF_ABSENT  */ ((value.pDPID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_PDPID, $.BER)(value.pDPID, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.chargingRollOver === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ChargingRollOver, $.BER)(value.chargingRollOver, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ApplyChargingReportGPRSArg(value, elGetter);
}


/* eslint-enable */
