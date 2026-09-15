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
import { ControlType, _decode_ControlType, _encode_ControlType } from "../CAP-datatypes/ControlType.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../CAP-datatypes/Extensions.ta.mjs";
import { type GapCriteria, _decode_GapCriteria, _encode_GapCriteria } from "../CAP-datatypes/GapCriteria.ta.mjs";
import { GapIndicators, _decode_GapIndicators, _encode_GapIndicators } from "../CAP-datatypes/GapIndicators.ta.mjs";
import { type GapTreatment, _decode_GapTreatment, _encode_GapTreatment } from "../CAP-datatypes/GapTreatment.ta.mjs";



/**
 * @summary CallGapArg
 * @description
 * 
 * Argument of CallGap: criteria, indicators, and treatment for reducing the
 * rate of service requests to gsmSCF. (3GPP TS 29.078 V19.0.0 clause 11.5.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallGapArg {PARAMETERS-BOUND : bound} ::= SEQUENCE {
 *     gapCriteria                [0] GapCriteria {bound},
 *     gapIndicators            [1] GapIndicators,
 *     controlType                [2] ControlType                OPTIONAL,
 *     gapTreatment            [3] GapTreatment {bound}            OPTIONAL,
 *     extensions                [4] Extensions {bound}            OPTIONAL,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class CallGapArg {
    constructor (
        /**
         * @summary `gapCriteria`.
         * @description
         *
         * Which calls are subject to gapping. `basicGapCriteria`:
         * `calledAddressValue` (leading dialled digits), `gapOnService`
         * (Service Key), `calledAddressAndService`, or
         * `callingAddressAndService` (for CF, the redirecting number in
         * InitialDP is used). `compoundGapCriteria` adds `scfID` (fixed GT of
         * the requesting gsmSCF; omitted means not dedicated to one gsmSCF).
         * (3GPP TS 29.078 V19.0.0 clause 11.5.1.1).
         *
         * @public
         * @readonly
         */
        readonly gapCriteria: GapCriteria,
        /**
         * @summary `gapIndicators`.
         * @description
         *
         * Gapping characteristics. `duration`: total active interval (0 removes
         * gapping; 2 is network-specific; other values in seconds; −1 shall not
         * be used). `gapInterval`: minimum time between allowed calls (0 = do
         * not reject; 1 = reject all matching; other values in milliseconds).
         * (3GPP TS 29.078 V19.0.0 clause 11.5.1.1).
         *
         * @public
         * @readonly
         */
        readonly gapIndicators: GapIndicators,
        /**
         * @summary `controlType`.
         * @description
         *
         * `sCPOverloaded`: automatic congestion detection in the SCP.
         * `manuallyInitiated`: from the service or (service) network management
         * centre; has priority over `sCPOverloaded`. (3GPP TS 29.078 V19.0.0
         * clause 11.5.1.1).
         *
         * @public
         * @readonly
         */
        readonly controlType: OPTIONAL<ControlType>,
        /**
         * @summary `gapTreatment`.
         * @description
         *
         * How calls stopped by gapping are treated. `informationToSend`
         * (announcement or tone, then release) or `releaseCause` (ISUP cause in
         * the release message). If absent, gsmSSF uses a network-operator
         * default. (3GPP TS 29.078 V19.0.0 clause 11.5.1.1).
         *
         * @public
         * @readonly
         */
        readonly gapTreatment: OPTIONAL<GapTreatment>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CallGapArg
     * @description
     * 
     * This takes an `object` and converts it to a `CallGapArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CallGapArg`.
     * @returns {CallGapArg}
     */
    public static _from_object (_o: { [_K in keyof (CallGapArg)]: (CallGapArg)[_K] }): CallGapArg {
        return new CallGapArg(_o.gapCriteria, _o.gapIndicators, _o.controlType, _o.gapTreatment, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CallGapArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CallGapArg: $.ComponentSpec[] = [
    new $.ComponentSpec("gapCriteria", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("gapIndicators", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("controlType", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("gapTreatment", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of CallGapArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CallGapArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CallGapArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CallGapArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CallGapArg: $.ASN1Decoder<CallGapArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallGapArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallGapArg (el: _Element): CallGapArg {
    if (!_cached_decoder_for_CallGapArg) { _cached_decoder_for_CallGapArg = function (el: _Element): CallGapArg {
    let gapCriteria!: GapCriteria;
    let gapIndicators!: GapIndicators;
    let controlType: OPTIONAL<ControlType>;
    let gapTreatment: OPTIONAL<GapTreatment>;
    let extensions: OPTIONAL<Extensions>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "gapCriteria": (_el: _Element): void => { gapCriteria = $._decode_implicit<GapCriteria>(() => _decode_GapCriteria)(_el); },
        "gapIndicators": (_el: _Element): void => { gapIndicators = $._decode_implicit<GapIndicators>(() => _decode_GapIndicators)(_el); },
        "controlType": (_el: _Element): void => { controlType = $._decode_implicit<ControlType>(() => _decode_ControlType)(_el); },
        "gapTreatment": (_el: _Element): void => { gapTreatment = $._decode_implicit<GapTreatment>(() => _decode_GapTreatment)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CallGapArg,
        _extension_additions_list_spec_for_CallGapArg,
        _root_component_type_list_2_spec_for_CallGapArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CallGapArg(
        gapCriteria,
        gapIndicators,
        controlType,
        gapTreatment,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CallGapArg(el);
}

let _cached_encoder_for_CallGapArg: $.ASN1Encoder<CallGapArg> | null = null;

/**
 * @summary Encodes a(n) CallGapArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallGapArg, encoded as an ASN.1 Element.
 */
export
function _encode_CallGapArg (value: CallGapArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallGapArg) { _cached_encoder_for_CallGapArg = function (value: CallGapArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_GapCriteria, $.BER)(value.gapCriteria, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GapIndicators, $.BER)(value.gapIndicators, $.BER),
            /* IF_ABSENT  */ ((value.controlType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ControlType, $.BER)(value.controlType, $.BER)),
            /* IF_ABSENT  */ ((value.gapTreatment === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_GapTreatment, $.BER)(value.gapTreatment, $.BER)),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Extensions, $.BER)(value.extensions, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CallGapArg(value, elGetter);
}


/* eslint-enable */
