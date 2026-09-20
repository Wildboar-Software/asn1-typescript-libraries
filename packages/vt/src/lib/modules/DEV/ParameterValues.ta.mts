/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    PrintableString,
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
import { _decode_AccessRuleValue, _encode_AccessRuleValue, type AccessRuleValue } from "../CSS/AccessRuleValue.ta.mjs";
import { ParameterValues_defaultCOPriority, _decode_ParameterValues_defaultCOPriority, _encode_ParameterValues_defaultCOPriority } from "../DEV/ParameterValues-defaultCOPriority.ta.mjs";
import { _decode_CompoundRepertoireValue, _encode_CompoundRepertoireValue, CompoundRepertoireValue } from "../CDS/CompoundRepertoireValue.ta.mjs";
import { _decode_CompoundEmphasisValue, _encode_CompoundEmphasisValue, type CompoundEmphasisValue } from "../CDS/CompoundEmphasisValue.ta.mjs";
import { _decode_CompoundColourValue, _encode_CompoundColourValue, CompoundColourValue } from "../CDS/CompoundColourValue.ta.mjs";
import { ParameterValues_terminationEventList_Item, _decode_ParameterValues_terminationEventList_Item, _encode_ParameterValues_terminationEventList_Item } from "../DEV/ParameterValues-terminationEventList-Item.ta.mjs";
import { ParameterValues_terminationLength, _decode_ParameterValues_terminationLength, _encode_ParameterValues_terminationLength } from "../DEV/ParameterValues-terminationLength.ta.mjs";
import { ParameterValues_terminationTimeout, _decode_ParameterValues_terminationTimeout, _encode_ParameterValues_terminationTimeout } from "../DEV/ParameterValues-terminationTimeout.ta.mjs";
import { ParameterValues_defaultCOinitialValue, _decode_ParameterValues_defaultCOinitialValue, _encode_ParameterValues_defaultCOinitialValue } from "../DEV/ParameterValues-defaultCOinitialValue.ta.mjs";


/**
 * @summary ParameterValues
 * @description
 *
 * Agreed device-object VTE-parameter values. The default CO is always
 * category boolean with eight booleans. Termination parameters are
 * optional; they specify when the VT-user should notify the peer of
 * prior updates (often by writing an event-id into a TCO) and do not
 * by themselves block further updates. ISO/IEC 9040:1997 §23; ISO/IEC
 * 9041-1:1997 §12.5.3.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterValues ::= SEQUENCE {
 *     defaultCOaccess             [0] IMPLICIT CSS.AccessRuleValue OPTIONAL,
 *     defaultCOPriority           [1] IMPLICIT INTEGER {
 *         normal (0),
 *         high   (1),
 *         urgent (2)
 *     } OPTIONAL,
 *     deviceRepertoireAssignment  [2] IMPLICIT CDS.CompoundRepertoireValue OPTIONAL,
 *     deviceEmphasisAssignment    [3] IMPLICIT CDS.CompoundEmphasisValue OPTIONAL,
 *     deviceForegroundAssignment  [4] IMPLICIT CDS.CompoundColourValue OPTIONAL,
 *     deviceBackgroundAssignment  [5] IMPLICIT CDS.CompoundColourValue OPTIONAL,
 *     -- see note in 12.5.1
 *     minimumXarrayLength         [6] IMPLICIT INTEGER OPTIONAL,
 *     minimumYarrayLength         [7] IMPLICIT INTEGER OPTIONAL,
 *     deviceControlObjectNames    [8] IMPLICIT SEQUENCE OF PrintableString OPTIONAL,
 *     deviceDisplayObjectName     [9] IMPLICIT PrintableString OPTIONAL,
 *     terminationEventList        [10] IMPLICIT SET OF SEQUENCE {
 *         event ANY,
 *         eventId CHOICE {
 *             integer INTEGER,
 *             nul NULL
 *         }
 *     } OPTIONAL,
 *     -- The datatypes for "event" will be as defined in the vte-profile used as
 *     -- the initial draft-VTEfor the individual instance of negotiation.
 *     terminationLength           [11] IMPLICIT SEQUENCE {
 *         length [0] IMPLICIT INTEGER OPTIONAL,
 *         eventId CHOICE {
 *             integer [1] IMPLICIT INTEGER,
 *             nul     [2] IMPLICIT NULL
 *         }
 *     } OPTIONAL,
 *     terminationTimeout          [12] IMPLICIT SEQUENCE {
 *         timeMultiplier INTEGER,
 *         timeExponent INTEGER,
 *         eventId CHOICE {
 *             integer INTEGER,
 *             nul NULL
 *         }
 *     } OPTIONAL,
 *     defaultCOtriggerSelected    [13] IMPLICIT BOOLEAN OPTIONAL,
 *     defaultCOinitialValue       [14] IMPLICIT SEQUENCE {
 *         value [0] IMPLICIT BIT STRING,
 *         mask  [1] IMPLICIT BIT STRING OPTIONAL
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ParameterValues {
    constructor (
        /**
         * @summary `defaultCOaccess`.
         * @description
         * CSS `AccessRuleValue` for the implicit default CO. ISO/IEC
         * 9040:1997 §23.1 table 12.
         * @public
         * @readonly
         */
        readonly defaultCOaccess: OPTIONAL<AccessRuleValue>,
        /**
         * @summary `defaultCOPriority`.
         * @description
         * Agreed default-CO priority. Same meaning as CO-priority.
         * ISO/IEC 9040:1997 §23.1 table 12.
         * @public
         * @readonly
         */
        readonly defaultCOPriority: OPTIONAL<ParameterValues_defaultCOPriority>,
        /**
         * @summary `deviceRepertoireAssignment`.
         * @description
         * Agreed repertoire overrides. The n-th device assignment
         * overrides the n-th DO assignment; `"null"` skips a slot.
         * ISO/IEC 9040:1997 §23.3.
         * @public
         * @readonly
         */
        readonly deviceRepertoireAssignment: OPTIONAL<CompoundRepertoireValue>,
        /**
         * @summary `deviceEmphasisAssignment`.
         * @description
         * Agreed emphasis overrides of the linked DO. Same n-th/`"null"`
         * slot rule. ISO/IEC 9040:1997 §23.3.
         * @public
         * @readonly
         */
        readonly deviceEmphasisAssignment: OPTIONAL<CompoundEmphasisValue>,
        /**
         * @summary `deviceForegroundAssignment`.
         * @description
         * Agreed foreground-colour overrides of the linked DO. Same
         * CDS colour semantics and n-th/`"null"` slot rule. ISO/IEC
         * 9040:1997 §23.3.
         * @public
         * @readonly
         */
        readonly deviceForegroundAssignment: OPTIONAL<CompoundColourValue>,
        /**
         * @summary `deviceBackgroundAssignment`.
         * @description
         * Agreed background-colour overrides of the linked DO. Same
         * CDS colour semantics and n-th/`"null"` slot rule. ISO/IEC
         * 9040:1997 §23.3.
         * @public
         * @readonly
         */
        readonly deviceBackgroundAssignment: OPTIONAL<CompoundColourValue>,
        /**
         * @summary `minimumXarrayLength`.
         * @description
         * Agreed minimum X-array length the device must handle.
         * ISO/IEC 9040:1997 §23.2 table 12.
         * @public
         * @readonly
         */
        readonly minimumXarrayLength: OPTIONAL<INTEGER>,
        /**
         * @summary `minimumYarrayLength`.
         * @description
         * Agreed minimum Y-array length the device must handle.
         * ISO/IEC 9040:1997 §23.2 table 12.
         * @public
         * @readonly
         */
        readonly minimumYarrayLength: OPTIONAL<INTEGER>,
        /**
         * @summary `deviceControlObjectNames`.
         * @description
         * Linked CO-names (profile-defined semantics). Does not
         * include the implicit default CO. ISO/IEC 9040:1997 §23
         * notes.
         * @public
         * @readonly
         */
        readonly deviceControlObjectNames: OPTIONAL<PrintableString[]>,
        /**
         * @summary `deviceDisplayObjectName`.
         * @description
         * Linked DO-name; must equal a DO-name in the VTE. ISO/IEC
         * 9040:1997 §23 notes.
         * @public
         * @readonly
         */
        readonly deviceDisplayObjectName: OPTIONAL<PrintableString>,
        /**
         * @summary `terminationEventList`.
         * @description
         * Agreed `<event, eventId>` pairs. Event syntax is not defined
         * in 9040; datatypes come from the VTE-profile used as the
         * initial draft-VTE. Absent ⇒ no explicit event conditions.
         * ISO/IEC 9040:1997 §23.4; ISO/IEC 9041-1:1997 §12.5.3.
         * @public
         * @readonly
         */
        readonly terminationEventList: OPTIONAL<ParameterValues_terminationEventList_Item[]>,
        /**
         * @summary `terminationLength`.
         * @description
         * Agreed `<length, eventId>`: terminate after this many
         * array-element updates if no event fired first. Absent ⇒ no
         * update-count limit. ISO/IEC 9040:1997 §23.4 table 14.
         * @public
         * @readonly
         */
        readonly terminationLength: OPTIONAL<ParameterValues_terminationLength>,
        /**
         * @summary `terminationTimeout`.
         * @description
         * Agreed timeout `<T, E, eventId>`. T and E encode the timeout
         * per ISO/IEC 9040:1997 §23.4; T=0 means infinite. If a TCCO
         * is linked, these parameters become ineffective; an FDCO
         * linked to the device also overrides them. ISO/IEC 9040:1997
         * §14.3, §23.4, §23.5.
         * @public
         * @readonly
         */
        readonly terminationTimeout: OPTIONAL<ParameterValues_terminationTimeout>,
        /**
         * @summary `defaultCOtriggerSelected`.
         * @description
         * Whether the implicit default CO's trigger is selected. True
         * = `selected`, false = `notSelected`. ISO/IEC 9040:1997
         * §23.1 table 12.
         * @public
         * @readonly
         */
        readonly defaultCOtriggerSelected: OPTIONAL<BOOLEAN>,
        /**
         * @summary `defaultCOinitialValue`.
         * @description
         * Agreed initial state of the eight booleans. BIT STRING
         * value plus optional mask (omitted ⇒ all-ones, same as
         * G.COupdate). ISO/IEC 9040:1997 §23.1; ISO/IEC 9041-1:1997
         * §12.5.3.
         * @public
         * @readonly
         */
        readonly defaultCOinitialValue: OPTIONAL<ParameterValues_defaultCOinitialValue>
    ) {}

    /**
     * @summary Restructures an object into a ParameterValues
     * @description
     * 
     * This takes an `object` and converts it to a `ParameterValues`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParameterValues`.
     * @returns {ParameterValues}
     */
    public static _from_object (_o: { [_K in keyof (ParameterValues)]: (ParameterValues)[_K] }): ParameterValues {
        return new ParameterValues(_o.defaultCOaccess, _o.defaultCOPriority, _o.deviceRepertoireAssignment, _o.deviceEmphasisAssignment, _o.deviceForegroundAssignment, _o.deviceBackgroundAssignment, _o.minimumXarrayLength, _o.minimumYarrayLength, _o.deviceControlObjectNames, _o.deviceDisplayObjectName, _o.terminationEventList, _o.terminationLength, _o.terminationTimeout, _o.defaultCOtriggerSelected, _o.defaultCOinitialValue);
    }


}

/**
 * @summary The Leading Root Component Types of ParameterValues
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParameterValues: $.ComponentSpec[] = [
    new $.ComponentSpec("defaultCOaccess", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("defaultCOPriority", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("deviceRepertoireAssignment", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("deviceEmphasisAssignment", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("deviceForegroundAssignment", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("deviceBackgroundAssignment", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("minimumXarrayLength", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("minimumYarrayLength", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("deviceControlObjectNames", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("deviceDisplayObjectName", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("terminationEventList", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("terminationLength", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("terminationTimeout", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("defaultCOtriggerSelected", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("defaultCOinitialValue", true, $.hasTag(_TagClass.context, 14))
];

/**
 * @summary The Trailing Root Component Types of ParameterValues
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParameterValues: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParameterValues
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParameterValues: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParameterValues: $.ASN1Decoder<ParameterValues> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterValues
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterValues (el: _Element): ParameterValues {
    if (!_cached_decoder_for_ParameterValues) { _cached_decoder_for_ParameterValues = function (el: _Element): ParameterValues {
    let defaultCOaccess: OPTIONAL<AccessRuleValue>;
    let defaultCOPriority: OPTIONAL<ParameterValues_defaultCOPriority>;
    let deviceRepertoireAssignment: OPTIONAL<CompoundRepertoireValue>;
    let deviceEmphasisAssignment: OPTIONAL<CompoundEmphasisValue>;
    let deviceForegroundAssignment: OPTIONAL<CompoundColourValue>;
    let deviceBackgroundAssignment: OPTIONAL<CompoundColourValue>;
    let minimumXarrayLength: OPTIONAL<INTEGER>;
    let minimumYarrayLength: OPTIONAL<INTEGER>;
    let deviceControlObjectNames: OPTIONAL<PrintableString[]>;
    let deviceDisplayObjectName: OPTIONAL<PrintableString>;
    let terminationEventList: OPTIONAL<ParameterValues_terminationEventList_Item[]>;
    let terminationLength: OPTIONAL<ParameterValues_terminationLength>;
    let terminationTimeout: OPTIONAL<ParameterValues_terminationTimeout>;
    let defaultCOtriggerSelected: OPTIONAL<BOOLEAN>;
    let defaultCOinitialValue: OPTIONAL<ParameterValues_defaultCOinitialValue>;
    const callbacks: $.DecodingMap = {
        "defaultCOaccess": (_el: _Element): void => { defaultCOaccess = $._decode_implicit<AccessRuleValue>(() => _decode_AccessRuleValue)(_el); },
        "defaultCOPriority": (_el: _Element): void => { defaultCOPriority = $._decode_implicit<ParameterValues_defaultCOPriority>(() => _decode_ParameterValues_defaultCOPriority)(_el); },
        "deviceRepertoireAssignment": (_el: _Element): void => { deviceRepertoireAssignment = $._decode_implicit<CompoundRepertoireValue>(() => _decode_CompoundRepertoireValue)(_el); },
        "deviceEmphasisAssignment": (_el: _Element): void => { deviceEmphasisAssignment = $._decode_implicit<CompoundEmphasisValue>(() => _decode_CompoundEmphasisValue)(_el); },
        "deviceForegroundAssignment": (_el: _Element): void => { deviceForegroundAssignment = $._decode_implicit<CompoundColourValue>(() => _decode_CompoundColourValue)(_el); },
        "deviceBackgroundAssignment": (_el: _Element): void => { deviceBackgroundAssignment = $._decode_implicit<CompoundColourValue>(() => _decode_CompoundColourValue)(_el); },
        "minimumXarrayLength": (_el: _Element): void => { minimumXarrayLength = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "minimumYarrayLength": (_el: _Element): void => { minimumYarrayLength = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "deviceControlObjectNames": (_el: _Element): void => { deviceControlObjectNames = $._decode_implicit<PrintableString[]>(() => $._decodeSequenceOf<PrintableString>(() => $._decodePrintableString))(_el); },
        "deviceDisplayObjectName": (_el: _Element): void => { deviceDisplayObjectName = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "terminationEventList": (_el: _Element): void => { terminationEventList = $._decode_implicit<ParameterValues_terminationEventList_Item[]>(() => $._decodeSetOf<ParameterValues_terminationEventList_Item>(() => _decode_ParameterValues_terminationEventList_Item))(_el); },
        "terminationLength": (_el: _Element): void => { terminationLength = $._decode_implicit<ParameterValues_terminationLength>(() => _decode_ParameterValues_terminationLength)(_el); },
        "terminationTimeout": (_el: _Element): void => { terminationTimeout = $._decode_implicit<ParameterValues_terminationTimeout>(() => _decode_ParameterValues_terminationTimeout)(_el); },
        "defaultCOtriggerSelected": (_el: _Element): void => { defaultCOtriggerSelected = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "defaultCOinitialValue": (_el: _Element): void => { defaultCOinitialValue = $._decode_implicit<ParameterValues_defaultCOinitialValue>(() => _decode_ParameterValues_defaultCOinitialValue)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ParameterValues,
        _extension_additions_list_spec_for_ParameterValues,
        _root_component_type_list_2_spec_for_ParameterValues,
        undefined,
    );
    return new ParameterValues(
        defaultCOaccess,
        defaultCOPriority,
        deviceRepertoireAssignment,
        deviceEmphasisAssignment,
        deviceForegroundAssignment,
        deviceBackgroundAssignment,
        minimumXarrayLength,
        minimumYarrayLength,
        deviceControlObjectNames,
        deviceDisplayObjectName,
        terminationEventList,
        terminationLength,
        terminationTimeout,
        defaultCOtriggerSelected,
        defaultCOinitialValue
    );
}; }
    return _cached_decoder_for_ParameterValues(el);
}

let _cached_encoder_for_ParameterValues: $.ASN1Encoder<ParameterValues> | null = null;

/**
 * @summary Encodes a(n) ParameterValues into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterValues, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterValues (value: ParameterValues, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterValues) { _cached_encoder_for_ParameterValues = function (value: ParameterValues): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.defaultCOaccess === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AccessRuleValue, $.BER)(value.defaultCOaccess, $.BER)),
            /* IF_ABSENT  */ ((value.defaultCOPriority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ParameterValues_defaultCOPriority, $.BER)(value.defaultCOPriority, $.BER)),
            /* IF_ABSENT  */ ((value.deviceRepertoireAssignment === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CompoundRepertoireValue, $.BER)(value.deviceRepertoireAssignment, $.BER)),
            /* IF_ABSENT  */ ((value.deviceEmphasisAssignment === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CompoundEmphasisValue, $.BER)(value.deviceEmphasisAssignment, $.BER)),
            /* IF_ABSENT  */ ((value.deviceForegroundAssignment === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_CompoundColourValue, $.BER)(value.deviceForegroundAssignment, $.BER)),
            /* IF_ABSENT  */ ((value.deviceBackgroundAssignment === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_CompoundColourValue, $.BER)(value.deviceBackgroundAssignment, $.BER)),
            /* IF_ABSENT  */ ((value.minimumXarrayLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.minimumXarrayLength, $.BER)),
            /* IF_ABSENT  */ ((value.minimumYarrayLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.minimumYarrayLength, $.BER)),
            /* IF_ABSENT  */ ((value.deviceControlObjectNames === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<PrintableString>(() => $._encodePrintableString, $.BER), $.BER)(value.deviceControlObjectNames, $.BER)),
            /* IF_ABSENT  */ ((value.deviceDisplayObjectName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodePrintableString, $.BER)(value.deviceDisplayObjectName, $.BER)),
            /* IF_ABSENT  */ ((value.terminationEventList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeSetOf<ParameterValues_terminationEventList_Item>(() => _encode_ParameterValues_terminationEventList_Item, $.BER), $.BER)(value.terminationEventList, $.BER)),
            /* IF_ABSENT  */ ((value.terminationLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_ParameterValues_terminationLength, $.BER)(value.terminationLength, $.BER)),
            /* IF_ABSENT  */ ((value.terminationTimeout === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_ParameterValues_terminationTimeout, $.BER)(value.terminationTimeout, $.BER)),
            /* IF_ABSENT  */ ((value.defaultCOtriggerSelected === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeBoolean, $.BER)(value.defaultCOtriggerSelected, $.BER)),
            /* IF_ABSENT  */ ((value.defaultCOinitialValue === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_ParameterValues_defaultCOinitialValue, $.BER)(value.defaultCOinitialValue, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParameterValues(value, elGetter);
}


/* eslint-enable */
