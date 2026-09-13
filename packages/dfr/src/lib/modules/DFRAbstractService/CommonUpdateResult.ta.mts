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
import { DfrUniquePermanentIdentifier, _decode_DfrUniquePermanentIdentifier, _encode_DfrUniquePermanentIdentifier } from "../DFRAbstractService/DfrUniquePermanentIdentifier.ta.mjs";
// export { DfrUniquePermanentIdentifier, _decode_DfrUniquePermanentIdentifier, _encode_DfrUniquePermanentIdentifier } from "../DFRAbstractService/DfrUniquePermanentIdentifier.ta.mjs";
import { EntryInformation, _decode_EntryInformation, _encode_EntryInformation } from "../DFRAbstractService/EntryInformation.ta.mjs";
// export { EntryInformation, _decode_EntryInformation, _encode_EntryInformation } from "../DFRAbstractService/EntryInformation.ta.mjs";
import { Warning, _decode_Warning, _encode_Warning } from "../DFRAbstractService/Warning.ta.mjs";
// export { Warning, _decode_Warning, _encode_Warning } from "../DFRAbstractService/Warning.ta.mjs";
import { TaskId, _decode_TaskId, _encode_TaskId } from "../DFRAbstractService/TaskId.ta.mjs";
// export { TaskId, _decode_TaskId, _encode_TaskId } from "../DFRAbstractService/TaskId.ta.mjs";
import { Quality_of_Service, _decode_Quality_of_Service, _encode_Quality_of_Service } from "../DOR-definition/Quality-of-Service.ta.mjs";
// export { Quality_of_Service, _decode_Quality_of_Service, _encode_Quality_of_Service } from "../DOR-definition/Quality-of-Service.ta.mjs";
import { ReferentStatus, _enum_for_ReferentStatus, _decode_ReferentStatus, _encode_ReferentStatus } from "../DFRAbstractService/ReferentStatus.ta.mjs";
// export { ReferentStatus, _enum_for_ReferentStatus, ReferentStatus_not_changed_since_produce /* IMPORTED_LONG_ENUMERATION_ITEM */, not_changed_since_produce /* IMPORTED_SHORT_ENUMERATION_ITEM */, ReferentStatus_changed_since_produce /* IMPORTED_LONG_ENUMERATION_ITEM */, changed_since_produce /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ReferentStatus, _encode_ReferentStatus } from "../DFRAbstractService/ReferentStatus.ta.mjs";


/**
 * @summary CommonUpdateResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonUpdateResult ::= SEQUENCE {
 *     upi                 [0] DfrUniquePermanentIdentifier,
 *     entry-information   [1] EntryInformation OPTIONAL,
 *     warnings            [2] SEQUENCE OF Warning DEFAULT {},
 *     continuation        [3] TaskId OPTIONAL,
 *     reference-qos       [4] Quality-of-Service OPTIONAL,
 *     referent-altered    [5] ReferentStatus OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CommonUpdateResult {
    constructor (
        /**
         * @summary `upi`.
         * @public
         * @readonly
         */
        readonly upi: DfrUniquePermanentIdentifier,
        /**
         * @summary `entry_information`.
         * @public
         * @readonly
         */
        readonly entry_information: OPTIONAL<EntryInformation>,
        /**
         * @summary `warnings`.
         * @public
         * @readonly
         */
        readonly warnings: OPTIONAL<Warning[]>,
        /**
         * @summary `continuation`.
         * @public
         * @readonly
         */
        readonly continuation: OPTIONAL<TaskId>,
        /**
         * @summary `reference_qos`.
         * @public
         * @readonly
         */
        readonly reference_qos: OPTIONAL<Quality_of_Service>,
        /**
         * @summary `referent_altered`.
         * @public
         * @readonly
         */
        readonly referent_altered: OPTIONAL<ReferentStatus>
    ) {}

    /**
     * @summary Restructures an object into a CommonUpdateResult
     * @description
     * 
     * This takes an `object` and converts it to a `CommonUpdateResult`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CommonUpdateResult`.
     * @returns {CommonUpdateResult}
     */
    public static _from_object (_o: { [_K in keyof (CommonUpdateResult)]: (CommonUpdateResult)[_K] }): CommonUpdateResult {
        return new CommonUpdateResult(_o.upi, _o.entry_information, _o.warnings, _o.continuation, _o.reference_qos, _o.referent_altered);
    }

    /**
     * @summary Getter that returns the default value for `warnings`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_warnings (): Warning[] { return []; }        /**
         * @summary The enum used as the type of the component `referent_altered`
         * @public
         * @static
         */

    public static _enum_for_referent_altered = _enum_for_ReferentStatus;
}

/**
 * @summary The Leading Root Component Types of CommonUpdateResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CommonUpdateResult: $.ComponentSpec[] = [
    new $.ComponentSpec("upi", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("entry-information", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("warnings", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("continuation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("reference-qos", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("referent-altered", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of CommonUpdateResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CommonUpdateResult: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CommonUpdateResult
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CommonUpdateResult: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CommonUpdateResult: $.ASN1Decoder<CommonUpdateResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommonUpdateResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommonUpdateResult (el: _Element): CommonUpdateResult {
    if (!_cached_decoder_for_CommonUpdateResult) { _cached_decoder_for_CommonUpdateResult = function (el: _Element): CommonUpdateResult {
    let upi!: DfrUniquePermanentIdentifier;
    let entry_information: OPTIONAL<EntryInformation>;
    let warnings: OPTIONAL<Warning[]> = CommonUpdateResult._default_value_for_warnings;
    let continuation: OPTIONAL<TaskId>;
    let reference_qos: OPTIONAL<Quality_of_Service>;
    let referent_altered: OPTIONAL<ReferentStatus>;
    const callbacks: $.DecodingMap = {
        "upi": (_el: _Element): void => { upi = $._decode_implicit<DfrUniquePermanentIdentifier>(() => _decode_DfrUniquePermanentIdentifier)(_el); },
        "entry-information": (_el: _Element): void => { entry_information = $._decode_explicit<EntryInformation>(() => _decode_EntryInformation)(_el); },
        "warnings": (_el: _Element): void => { warnings = $._decode_implicit<Warning[]>(() => $._decodeSequenceOf<Warning>(() => _decode_Warning))(_el); },
        "continuation": (_el: _Element): void => { continuation = $._decode_implicit<TaskId>(() => _decode_TaskId)(_el); },
        "reference-qos": (_el: _Element): void => { reference_qos = $._decode_implicit<Quality_of_Service>(() => _decode_Quality_of_Service)(_el); },
        "referent-altered": (_el: _Element): void => { referent_altered = $._decode_implicit<ReferentStatus>(() => _decode_ReferentStatus)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CommonUpdateResult,
        _extension_additions_list_spec_for_CommonUpdateResult,
        _root_component_type_list_2_spec_for_CommonUpdateResult,
        undefined,
    );
    return new CommonUpdateResult(
        upi,
        entry_information,
        warnings,
        continuation,
        reference_qos,
        referent_altered
    );
}; }
    return _cached_decoder_for_CommonUpdateResult(el);
}

let _cached_encoder_for_CommonUpdateResult: $.ASN1Encoder<CommonUpdateResult> | null = null;

/**
 * @summary Encodes a(n) CommonUpdateResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonUpdateResult, encoded as an ASN.1 Element.
 */
export
function _encode_CommonUpdateResult (value: CommonUpdateResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommonUpdateResult) { _cached_encoder_for_CommonUpdateResult = function (value: CommonUpdateResult): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DfrUniquePermanentIdentifier, $.BER)(value.upi, $.BER),
            /* IF_ABSENT  */ ((value.entry_information === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_EntryInformation, $.BER)(value.entry_information, $.BER)),
            /* IF_DEFAULT */ (value.warnings === undefined || $.deepEq(value.warnings, CommonUpdateResult._default_value_for_warnings) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Warning>(() => _encode_Warning, $.BER), $.BER)(value.warnings, $.BER)),
            /* IF_ABSENT  */ ((value.continuation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_TaskId, $.BER)(value.continuation, $.BER)),
            /* IF_ABSENT  */ ((value.reference_qos === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_Quality_of_Service, $.BER)(value.reference_qos, $.BER)),
            /* IF_ABSENT  */ ((value.referent_altered === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_ReferentStatus, $.BER)(value.referent_altered, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CommonUpdateResult(value, elGetter);
}


/* eslint-enable */
