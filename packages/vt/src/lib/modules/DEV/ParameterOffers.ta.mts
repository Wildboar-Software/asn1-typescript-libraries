/* eslint-disable */
import {
    OPTIONAL,
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
import { _decode_AccessRuleOffer, _encode_AccessRuleOffer, type AccessRuleOffer } from "../CSS/AccessRuleOffer.ta.mjs";
// export { AccessRuleOffer, AccessRuleOffer_wavar /* IMPORTED_LONG_NAMED_BIT */, wavar /* IMPORTED_SHORT_NAMED_BIT */, AccessRuleOffer_waci /* IMPORTED_LONG_NAMED_BIT */, waci /* IMPORTED_SHORT_NAMED_BIT */, AccessRuleOffer_waca /* IMPORTED_LONG_NAMED_BIT */, waca /* IMPORTED_SHORT_NAMED_BIT */, AccessRuleOffer_nsac /* IMPORTED_LONG_NAMED_BIT */, nsac /* IMPORTED_SHORT_NAMED_BIT */, AccessRuleOffer_wavar_and_waci /* IMPORTED_LONG_NAMED_BIT */, wavar_and_waci /* IMPORTED_SHORT_NAMED_BIT */, AccessRuleOffer_wavar_and_waca /* IMPORTED_LONG_NAMED_BIT */, wavar_and_waca /* IMPORTED_SHORT_NAMED_BIT */, AccessRuleOffer_no_access /* IMPORTED_LONG_NAMED_BIT */, no_access /* IMPORTED_SHORT_NAMED_BIT */, _decode_AccessRuleOffer, _encode_AccessRuleOffer } from "../CSS/AccessRuleOffer.ta.mjs";
import { ParameterOffers_defaultCOPriority, _decode_ParameterOffers_defaultCOPriority, _encode_ParameterOffers_defaultCOPriority } from "../DEV/ParameterOffers-defaultCOPriority.ta.mjs";
// export { ParameterOffers_defaultCOPriority, ParameterOffers_defaultCOPriority_normal /* IMPORTED_LONG_NAMED_BIT */, normal /* IMPORTED_SHORT_NAMED_BIT */, ParameterOffers_defaultCOPriority_high /* IMPORTED_LONG_NAMED_BIT */, high /* IMPORTED_SHORT_NAMED_BIT */, ParameterOffers_defaultCOPriority_urgent /* IMPORTED_LONG_NAMED_BIT */, urgent /* IMPORTED_SHORT_NAMED_BIT */, _decode_ParameterOffers_defaultCOPriority, _encode_ParameterOffers_defaultCOPriority } from "../DEV/ParameterOffers-defaultCOPriority.ta.mjs";
import { _decode_CompoundRepertoireOffer, _encode_CompoundRepertoireOffer, CompoundRepertoireOffer } from "../CDS/CompoundRepertoireOffer.ta.mjs";
// export { CompoundRepertoireOffer, _decode_CompoundRepertoireOffer, _encode_CompoundRepertoireOffer } from "../CDS/CompoundRepertoireOffer.ta.mjs";
import { _decode_CompoundEmphasisOffer, _encode_CompoundEmphasisOffer, type CompoundEmphasisOffer } from "../CDS/CompoundEmphasisOffer.ta.mjs";
// export { CompoundEmphasisOffer, _decode_CompoundEmphasisOffer, _encode_CompoundEmphasisOffer } from "../CDS/CompoundEmphasisOffer.ta.mjs";
import { _decode_CompoundColourOffer, _encode_CompoundColourOffer, CompoundColourOffer } from "../CDS/CompoundColourOffer.ta.mjs";
// export { CompoundColourOffer, _decode_CompoundColourOffer, _encode_CompoundColourOffer } from "../CDS/CompoundColourOffer.ta.mjs";
import { _decode_IntegerOffer, _encode_IntegerOffer, type IntegerOffer } from "../G/IntegerOffer.ta.mjs";
// export { IntegerOffer, _decode_IntegerOffer, _encode_IntegerOffer } from "../G/IntegerOffer.ta.mjs";
import { ParameterOffers_terminationEventList_Item_Item, _decode_ParameterOffers_terminationEventList_Item_Item, _encode_ParameterOffers_terminationEventList_Item_Item } from "../DEV/ParameterOffers-terminationEventList-Item-Item.ta.mjs";
// export { ParameterOffers_terminationEventList_Item_Item, _decode_ParameterOffers_terminationEventList_Item_Item, _encode_ParameterOffers_terminationEventList_Item_Item } from "../DEV/ParameterOffers-terminationEventList-Item-Item.ta.mjs";
import { ParameterOffers_terminationLength, _decode_ParameterOffers_terminationLength, _encode_ParameterOffers_terminationLength } from "../DEV/ParameterOffers-terminationLength.ta.mjs";
// export { ParameterOffers_terminationLength, _decode_ParameterOffers_terminationLength, _encode_ParameterOffers_terminationLength } from "../DEV/ParameterOffers-terminationLength.ta.mjs";
import { ParameterOffers_terminationTimeout, _decode_ParameterOffers_terminationTimeout, _encode_ParameterOffers_terminationTimeout } from "../DEV/ParameterOffers-terminationTimeout.ta.mjs";
// export { ParameterOffers_terminationTimeout, _decode_ParameterOffers_terminationTimeout, _encode_ParameterOffers_terminationTimeout } from "../DEV/ParameterOffers-terminationTimeout.ta.mjs";
import { ParameterOffers_defaultCOtrigger, _decode_ParameterOffers_defaultCOtrigger, _encode_ParameterOffers_defaultCOtrigger } from "../DEV/ParameterOffers-defaultCOtrigger.ta.mjs";
// export { ParameterOffers_defaultCOtrigger, ParameterOffers_defaultCOtrigger_notSelected /* IMPORTED_LONG_NAMED_BIT */, notSelected /* IMPORTED_SHORT_NAMED_BIT */, ParameterOffers_defaultCOtrigger_selected /* IMPORTED_LONG_NAMED_BIT */, selected /* IMPORTED_SHORT_NAMED_BIT */, _decode_ParameterOffers_defaultCOtrigger, _encode_ParameterOffers_defaultCOtrigger } from "../DEV/ParameterOffers-defaultCOtrigger.ta.mjs";
import { ParameterOffers_defaultCOinitialValue_Item, _decode_ParameterOffers_defaultCOinitialValue_Item, _encode_ParameterOffers_defaultCOinitialValue_Item } from "../DEV/ParameterOffers-defaultCOinitialValue-Item.ta.mjs";
// export { ParameterOffers_defaultCOinitialValue_Item, _decode_ParameterOffers_defaultCOinitialValue_Item, _encode_ParameterOffers_defaultCOinitialValue_Item } from "../DEV/ParameterOffers-defaultCOinitialValue-Item.ta.mjs";


/**
 * @summary ParameterOffers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers ::= SEQUENCE {
 *     defaultCOaccess             [0] IMPLICIT CSS.AccessRuleOffer OPTIONAL,
 *     -- Set bits are offered, unset ones are not.
 *     defaultCOPriority           [1] IMPLICIT BIT STRING {
 *         normal (0),
 *         high   (1),
 *         urgent (2)
 *     } OPTIONAL,
 *     deviceRepertoireAssignment  [2] IMPLICIT CDS.CompoundRepertoireOffer OPTIONAL,
 *     deviceEmphasisAssignment    [3] IMPLICIT CDS.CompoundEmphasisOffer OPTIONAL,
 *     deviceForegroundAssignment  [4] IMPLICIT CDS.CompoundColourOffer OPTIONAL,
 *     deviceBackgroundAssignment  [5] IMPLICIT CDS.CompoundColourOffer OPTIONAL,
 *     -- see note in 12.5.1
 *     minimumXarrayLength         [6] IMPLICIT G.IntegerOffer OPTIONAL,
 *     minimumYarrayLength         [7] IMPLICIT G.IntegerOffer OPTIONAL,
 *     deviceControlObjectNames    [8] IMPLICIT SEQUENCE OF SEQUENCE OF PrintableString OPTIONAL,
 *     deviceDisplayObjectName     [9] IMPLICIT SEQUENCE OF PrintableString OPTIONAL,
 *     terminationEventList        [10] IMPLICIT SEQUENCE OF SET OF SEQUENCE {
 *         event   ANY,
 *         eventId SEQUENCE {
 *             integer G.IntegerOffer OPTIONAL,
 *             nul     NULL OPTIONAL
 *         }
 *     } OPTIONAL,
 *     -- The datatypes for "event" will be as defined in the vte-profile used as
 *     -- the initial draft-VTE for the individual instance of negotiation.
 *     terminationLength           [11] IMPLICIT SEQUENCE {
 *         length      [0] IMPLICIT G.IntegerOffer,
 *         eventId     [1] IMPLICIT SEQUENCE {
 *             integer G.IntegerOffer OPTIONAL,
 *             nul     NULL OPTIONAL
 *         }
 *     } OPTIONAL,
 *     terminationTimeout          [12] IMPLICIT SEQUENCE {
 *         timeOffer   TimeOffer,
 *         eventId     SEQUENCE {
 *             integer     G.IntegerOffer OPTIONAL,
 *             nul         NULL OPTIONAL
 *         }
 *     } OPTIONAL,
 *     defaultCOtrigger            [13] IMPLICIT BIT STRING {
 *         notSelected (0),
 *         selected    (1)
 *     } OPTIONAL,
 *     defaultCOinitialValue       [14] IMPLICIT SEQUENCE OF SEQUENCE {
 *         value [0] IMPLICIT BIT STRING,
 *         mask  [1] IMPLICIT BIT STRING OPTIONAL
 *     } OPTIONAL
 *     -- See note under mask in G.COUpdate
 * }
 * ```
 * 
 * @class
 */
export
class ParameterOffers {
    constructor (
        /**
         * @summary `defaultCOaccess`.
         * @public
         * @readonly
         */
        readonly defaultCOaccess: OPTIONAL<AccessRuleOffer>,
        /**
         * @summary `defaultCOPriority`.
         * @public
         * @readonly
         */
        readonly defaultCOPriority: OPTIONAL<ParameterOffers_defaultCOPriority>,
        /**
         * @summary `deviceRepertoireAssignment`.
         * @public
         * @readonly
         */
        readonly deviceRepertoireAssignment: OPTIONAL<CompoundRepertoireOffer>,
        /**
         * @summary `deviceEmphasisAssignment`.
         * @public
         * @readonly
         */
        readonly deviceEmphasisAssignment: OPTIONAL<CompoundEmphasisOffer>,
        /**
         * @summary `deviceForegroundAssignment`.
         * @public
         * @readonly
         */
        readonly deviceForegroundAssignment: OPTIONAL<CompoundColourOffer>,
        /**
         * @summary `deviceBackgroundAssignment`.
         * @public
         * @readonly
         */
        readonly deviceBackgroundAssignment: OPTIONAL<CompoundColourOffer>,
        /**
         * @summary `minimumXarrayLength`.
         * @public
         * @readonly
         */
        readonly minimumXarrayLength: OPTIONAL<IntegerOffer>,
        /**
         * @summary `minimumYarrayLength`.
         * @public
         * @readonly
         */
        readonly minimumYarrayLength: OPTIONAL<IntegerOffer>,
        /**
         * @summary `deviceControlObjectNames`.
         * @public
         * @readonly
         */
        readonly deviceControlObjectNames: OPTIONAL<PrintableString[][]>,
        /**
         * @summary `deviceDisplayObjectName`.
         * @public
         * @readonly
         */
        readonly deviceDisplayObjectName: OPTIONAL<PrintableString[]>,
        /**
         * @summary `terminationEventList`.
         * @public
         * @readonly
         */
        readonly terminationEventList: OPTIONAL<ParameterOffers_terminationEventList_Item_Item[][]>,
        /**
         * @summary `terminationLength`.
         * @public
         * @readonly
         */
        readonly terminationLength: OPTIONAL<ParameterOffers_terminationLength>,
        /**
         * @summary `terminationTimeout`.
         * @public
         * @readonly
         */
        readonly terminationTimeout: OPTIONAL<ParameterOffers_terminationTimeout>,
        /**
         * @summary `defaultCOtrigger`.
         * @public
         * @readonly
         */
        readonly defaultCOtrigger: OPTIONAL<ParameterOffers_defaultCOtrigger>,
        /**
         * @summary `defaultCOinitialValue`.
         * @public
         * @readonly
         */
        readonly defaultCOinitialValue: OPTIONAL<ParameterOffers_defaultCOinitialValue_Item[]>
    ) {}

    /**
     * @summary Restructures an object into a ParameterOffers
     * @description
     * 
     * This takes an `object` and converts it to a `ParameterOffers`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ParameterOffers`.
     * @returns {ParameterOffers}
     */
    public static _from_object (_o: { [_K in keyof (ParameterOffers)]: (ParameterOffers)[_K] }): ParameterOffers {
        return new ParameterOffers(_o.defaultCOaccess, _o.defaultCOPriority, _o.deviceRepertoireAssignment, _o.deviceEmphasisAssignment, _o.deviceForegroundAssignment, _o.deviceBackgroundAssignment, _o.minimumXarrayLength, _o.minimumYarrayLength, _o.deviceControlObjectNames, _o.deviceDisplayObjectName, _o.terminationEventList, _o.terminationLength, _o.terminationTimeout, _o.defaultCOtrigger, _o.defaultCOinitialValue);
    }


}

/**
 * @summary The Leading Root Component Types of ParameterOffers
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ParameterOffers: $.ComponentSpec[] = [
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
    new $.ComponentSpec("defaultCOtrigger", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("defaultCOinitialValue", true, $.hasTag(_TagClass.context, 14))
];

/**
 * @summary The Trailing Root Component Types of ParameterOffers
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ParameterOffers: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ParameterOffers
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ParameterOffers: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ParameterOffers: $.ASN1Decoder<ParameterOffers> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterOffers
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterOffers (el: _Element): ParameterOffers {
    if (!_cached_decoder_for_ParameterOffers) { _cached_decoder_for_ParameterOffers = function (el: _Element): ParameterOffers {
    let defaultCOaccess: OPTIONAL<AccessRuleOffer>;
    let defaultCOPriority: OPTIONAL<ParameterOffers_defaultCOPriority>;
    let deviceRepertoireAssignment: OPTIONAL<CompoundRepertoireOffer>;
    let deviceEmphasisAssignment: OPTIONAL<CompoundEmphasisOffer>;
    let deviceForegroundAssignment: OPTIONAL<CompoundColourOffer>;
    let deviceBackgroundAssignment: OPTIONAL<CompoundColourOffer>;
    let minimumXarrayLength: OPTIONAL<IntegerOffer>;
    let minimumYarrayLength: OPTIONAL<IntegerOffer>;
    let deviceControlObjectNames: OPTIONAL<PrintableString[][]>;
    let deviceDisplayObjectName: OPTIONAL<PrintableString[]>;
    let terminationEventList: OPTIONAL<ParameterOffers_terminationEventList_Item_Item[][]>;
    let terminationLength: OPTIONAL<ParameterOffers_terminationLength>;
    let terminationTimeout: OPTIONAL<ParameterOffers_terminationTimeout>;
    let defaultCOtrigger: OPTIONAL<ParameterOffers_defaultCOtrigger>;
    let defaultCOinitialValue: OPTIONAL<ParameterOffers_defaultCOinitialValue_Item[]>;
    const callbacks: $.DecodingMap = {
        "defaultCOaccess": (_el: _Element): void => { defaultCOaccess = $._decode_implicit<AccessRuleOffer>(() => _decode_AccessRuleOffer)(_el); },
        "defaultCOPriority": (_el: _Element): void => { defaultCOPriority = $._decode_implicit<ParameterOffers_defaultCOPriority>(() => _decode_ParameterOffers_defaultCOPriority)(_el); },
        "deviceRepertoireAssignment": (_el: _Element): void => { deviceRepertoireAssignment = $._decode_implicit<CompoundRepertoireOffer>(() => _decode_CompoundRepertoireOffer)(_el); },
        "deviceEmphasisAssignment": (_el: _Element): void => { deviceEmphasisAssignment = $._decode_implicit<CompoundEmphasisOffer>(() => _decode_CompoundEmphasisOffer)(_el); },
        "deviceForegroundAssignment": (_el: _Element): void => { deviceForegroundAssignment = $._decode_implicit<CompoundColourOffer>(() => _decode_CompoundColourOffer)(_el); },
        "deviceBackgroundAssignment": (_el: _Element): void => { deviceBackgroundAssignment = $._decode_implicit<CompoundColourOffer>(() => _decode_CompoundColourOffer)(_el); },
        "minimumXarrayLength": (_el: _Element): void => { minimumXarrayLength = $._decode_implicit<IntegerOffer>(() => _decode_IntegerOffer)(_el); },
        "minimumYarrayLength": (_el: _Element): void => { minimumYarrayLength = $._decode_implicit<IntegerOffer>(() => _decode_IntegerOffer)(_el); },
        "deviceControlObjectNames": (_el: _Element): void => { deviceControlObjectNames = $._decode_implicit<PrintableString[][]>(() => $._decodeSequenceOf<PrintableString[]>(() => $._decodeSequenceOf<PrintableString>(() => $._decodePrintableString)))(_el); },
        "deviceDisplayObjectName": (_el: _Element): void => { deviceDisplayObjectName = $._decode_implicit<PrintableString[]>(() => $._decodeSequenceOf<PrintableString>(() => $._decodePrintableString))(_el); },
        "terminationEventList": (_el: _Element): void => { terminationEventList = $._decode_implicit<ParameterOffers_terminationEventList_Item_Item[][]>(() => $._decodeSequenceOf<ParameterOffers_terminationEventList_Item_Item[]>(() => $._decodeSetOf<ParameterOffers_terminationEventList_Item_Item>(() => _decode_ParameterOffers_terminationEventList_Item_Item)))(_el); },
        "terminationLength": (_el: _Element): void => { terminationLength = $._decode_implicit<ParameterOffers_terminationLength>(() => _decode_ParameterOffers_terminationLength)(_el); },
        "terminationTimeout": (_el: _Element): void => { terminationTimeout = $._decode_implicit<ParameterOffers_terminationTimeout>(() => _decode_ParameterOffers_terminationTimeout)(_el); },
        "defaultCOtrigger": (_el: _Element): void => { defaultCOtrigger = $._decode_implicit<ParameterOffers_defaultCOtrigger>(() => _decode_ParameterOffers_defaultCOtrigger)(_el); },
        "defaultCOinitialValue": (_el: _Element): void => { defaultCOinitialValue = $._decode_implicit<ParameterOffers_defaultCOinitialValue_Item[]>(() => $._decodeSequenceOf<ParameterOffers_defaultCOinitialValue_Item>(() => _decode_ParameterOffers_defaultCOinitialValue_Item))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ParameterOffers,
        _extension_additions_list_spec_for_ParameterOffers,
        _root_component_type_list_2_spec_for_ParameterOffers,
        undefined,
    );
    return new ParameterOffers(
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
        defaultCOtrigger,
        defaultCOinitialValue
    );
}; }
    return _cached_decoder_for_ParameterOffers(el);
}

let _cached_encoder_for_ParameterOffers: $.ASN1Encoder<ParameterOffers> | null = null;

/**
 * @summary Encodes a(n) ParameterOffers into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterOffers, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterOffers (value: ParameterOffers, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterOffers) { _cached_encoder_for_ParameterOffers = function (value: ParameterOffers): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.defaultCOaccess === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AccessRuleOffer, $.BER)(value.defaultCOaccess, $.BER)),
            /* IF_ABSENT  */ ((value.defaultCOPriority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ParameterOffers_defaultCOPriority, $.BER)(value.defaultCOPriority, $.BER)),
            /* IF_ABSENT  */ ((value.deviceRepertoireAssignment === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_CompoundRepertoireOffer, $.BER)(value.deviceRepertoireAssignment, $.BER)),
            /* IF_ABSENT  */ ((value.deviceEmphasisAssignment === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_CompoundEmphasisOffer, $.BER)(value.deviceEmphasisAssignment, $.BER)),
            /* IF_ABSENT  */ ((value.deviceForegroundAssignment === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_CompoundColourOffer, $.BER)(value.deviceForegroundAssignment, $.BER)),
            /* IF_ABSENT  */ ((value.deviceBackgroundAssignment === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_CompoundColourOffer, $.BER)(value.deviceBackgroundAssignment, $.BER)),
            /* IF_ABSENT  */ ((value.minimumXarrayLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_IntegerOffer, $.BER)(value.minimumXarrayLength, $.BER)),
            /* IF_ABSENT  */ ((value.minimumYarrayLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_IntegerOffer, $.BER)(value.minimumYarrayLength, $.BER)),
            /* IF_ABSENT  */ ((value.deviceControlObjectNames === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<PrintableString[]>(() => $._encodeSequenceOf<PrintableString>(() => $._encodePrintableString, $.BER), $.BER), $.BER)(value.deviceControlObjectNames, $.BER)),
            /* IF_ABSENT  */ ((value.deviceDisplayObjectName === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<PrintableString>(() => $._encodePrintableString, $.BER), $.BER)(value.deviceDisplayObjectName, $.BER)),
            /* IF_ABSENT  */ ((value.terminationEventList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeSequenceOf<ParameterOffers_terminationEventList_Item_Item[]>(() => $._encodeSetOf<ParameterOffers_terminationEventList_Item_Item>(() => _encode_ParameterOffers_terminationEventList_Item_Item, $.BER), $.BER), $.BER)(value.terminationEventList, $.BER)),
            /* IF_ABSENT  */ ((value.terminationLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_ParameterOffers_terminationLength, $.BER)(value.terminationLength, $.BER)),
            /* IF_ABSENT  */ ((value.terminationTimeout === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_ParameterOffers_terminationTimeout, $.BER)(value.terminationTimeout, $.BER)),
            /* IF_ABSENT  */ ((value.defaultCOtrigger === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_ParameterOffers_defaultCOtrigger, $.BER)(value.defaultCOtrigger, $.BER)),
            /* IF_ABSENT  */ ((value.defaultCOinitialValue === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => $._encodeSequenceOf<ParameterOffers_defaultCOinitialValue_Item>(() => _encode_ParameterOffers_defaultCOinitialValue_Item, $.BER), $.BER)(value.defaultCOinitialValue, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ParameterOffers(value, elGetter);
}


/* eslint-enable */
