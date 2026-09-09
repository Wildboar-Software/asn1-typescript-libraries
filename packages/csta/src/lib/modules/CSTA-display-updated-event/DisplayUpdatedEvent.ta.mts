/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    INTEGER,
    SEQUENCE,
    SET,
    IA5String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import { SubjectDeviceID, _decode_SubjectDeviceID, _encode_SubjectDeviceID } from "../CSTA-device-identifiers/SubjectDeviceID.ta.mjs";

import { DisplayID, _decode_DisplayID, _encode_DisplayID } from "../CSTA-physical-device-feature/DisplayID.ta.mjs";

import {
    CharacterSet,
    _enum_for_CharacterSet,
    _decode_CharacterSet,
    _encode_CharacterSet
} from "../CSTA-physical-device-feature/CharacterSet.ta.mjs";

import { CSTACommonArguments, _decode_CSTACommonArguments, _encode_CSTACommonArguments } from "../CSTA-extension-types/CSTACommonArguments.ta.mjs";



/**
 * @summary DisplayUpdatedEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisplayUpdatedEvent ::= SEQUENCE
 * {    device                SubjectDeviceID,
 *     displayID            DisplayID                OPTIONAL,
 *     logicalRows            INTEGER,
 *     logicalColumns            INTEGER,
 *     physicalRows            [0] IMPLICIT INTEGER             OPTIONAL,
 *     physicalColumns            [1] IMPLICIT INTEGER             OPTIONAL,
 *     physicalBaseRowNumber        [2] IMPLICIT INTEGER             OPTIONAL,
 *     physicalBaseColumnNumber    [3] IMPLICIT INTEGER             OPTIONAL,
 *     characterSet            CharacterSet                OPTIONAL,
 *     contentsOfDisplay        IA5String,
 *     extensions            CSTACommonArguments            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DisplayUpdatedEvent {
    constructor (
        /**
         * @summary `device`.
         * @public
         * @readonly
         */
        readonly device: SubjectDeviceID,
        /**
         * @summary `displayID`.
         * @public
         * @readonly
         */
        readonly displayID: OPTIONAL<DisplayID>,
        /**
         * @summary `logicalRows`.
         * @public
         * @readonly
         */
        readonly logicalRows: INTEGER,
        /**
         * @summary `logicalColumns`.
         * @public
         * @readonly
         */
        readonly logicalColumns: INTEGER,
        /**
         * @summary `physicalRows`.
         * @public
         * @readonly
         */
        readonly physicalRows: OPTIONAL<INTEGER>,
        /**
         * @summary `physicalColumns`.
         * @public
         * @readonly
         */
        readonly physicalColumns: OPTIONAL<INTEGER>,
        /**
         * @summary `physicalBaseRowNumber`.
         * @public
         * @readonly
         */
        readonly physicalBaseRowNumber: OPTIONAL<INTEGER>,
        /**
         * @summary `physicalBaseColumnNumber`.
         * @public
         * @readonly
         */
        readonly physicalBaseColumnNumber: OPTIONAL<INTEGER>,
        /**
         * @summary `characterSet`.
         * @public
         * @readonly
         */
        readonly characterSet: OPTIONAL<CharacterSet>,
        /**
         * @summary `contentsOfDisplay`.
         * @public
         * @readonly
         */
        readonly contentsOfDisplay: IA5String,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<CSTACommonArguments>
    ) {}

    /**
     * @summary Restructures an object into a DisplayUpdatedEvent
     * @description
     * 
     * This takes an `object` and converts it to a `DisplayUpdatedEvent`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DisplayUpdatedEvent`.
     * @returns {DisplayUpdatedEvent}
     */
    public static _from_object (_o: { [_K in keyof (DisplayUpdatedEvent)]: (DisplayUpdatedEvent)[_K] }): DisplayUpdatedEvent {
        return new DisplayUpdatedEvent(_o.device, _o.displayID, _o.logicalRows, _o.logicalColumns, _o.physicalRows, _o.physicalColumns, _o.physicalBaseRowNumber, _o.physicalBaseColumnNumber, _o.characterSet, _o.contentsOfDisplay, _o.extensions);
    }

        /**
         * @summary The enum used as the type of the component `characterSet`
         * @public
         * @static
         */

    public static _enum_for_characterSet = _enum_for_CharacterSet;
}

/**
 * @summary The Leading Root Component Types of DisplayUpdatedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DisplayUpdatedEvent: $.ComponentSpec[] = [
    new $.ComponentSpec("device", false, $.hasTag(_TagClass.application, 3)),
    new $.ComponentSpec("displayID", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("logicalRows", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("logicalColumns", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("physicalRows", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("physicalColumns", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("physicalBaseRowNumber", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("physicalBaseColumnNumber", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("characterSet", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("contentsOfDisplay", false, $.hasTag(_TagClass.universal, 22)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.application, 30))
];

/**
 * @summary The Trailing Root Component Types of DisplayUpdatedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DisplayUpdatedEvent: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DisplayUpdatedEvent
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DisplayUpdatedEvent: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DisplayUpdatedEvent: $.ASN1Decoder<DisplayUpdatedEvent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisplayUpdatedEvent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisplayUpdatedEvent (el: _Element): DisplayUpdatedEvent {
    if (!_cached_decoder_for_DisplayUpdatedEvent) { _cached_decoder_for_DisplayUpdatedEvent = function (el: _Element): DisplayUpdatedEvent {
    let device!: SubjectDeviceID;
    let displayID: OPTIONAL<DisplayID>;
    let logicalRows!: INTEGER;
    let logicalColumns!: INTEGER;
    let physicalRows: OPTIONAL<INTEGER>;
    let physicalColumns: OPTIONAL<INTEGER>;
    let physicalBaseRowNumber: OPTIONAL<INTEGER>;
    let physicalBaseColumnNumber: OPTIONAL<INTEGER>;
    let characterSet: OPTIONAL<CharacterSet>;
    let contentsOfDisplay!: IA5String;
    let extensions: OPTIONAL<CSTACommonArguments>;
    const callbacks: $.DecodingMap = {
        "device": (_el: _Element): void => { device = _decode_SubjectDeviceID(_el); },
        "displayID": (_el: _Element): void => { displayID = _decode_DisplayID(_el); },
        "logicalRows": (_el: _Element): void => { logicalRows = $._decodeInteger(_el); },
        "logicalColumns": (_el: _Element): void => { logicalColumns = $._decodeInteger(_el); },
        "physicalRows": (_el: _Element): void => { physicalRows = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "physicalColumns": (_el: _Element): void => { physicalColumns = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "physicalBaseRowNumber": (_el: _Element): void => { physicalBaseRowNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "physicalBaseColumnNumber": (_el: _Element): void => { physicalBaseColumnNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "characterSet": (_el: _Element): void => { characterSet = _decode_CharacterSet(_el); },
        "contentsOfDisplay": (_el: _Element): void => { contentsOfDisplay = $._decodeIA5String(_el); },
        "extensions": (_el: _Element): void => { extensions = _decode_CSTACommonArguments(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DisplayUpdatedEvent,
        _extension_additions_list_spec_for_DisplayUpdatedEvent,
        _root_component_type_list_2_spec_for_DisplayUpdatedEvent,
        undefined,
    );
    return new DisplayUpdatedEvent(
        device,
        displayID,
        logicalRows,
        logicalColumns,
        physicalRows,
        physicalColumns,
        physicalBaseRowNumber,
        physicalBaseColumnNumber,
        characterSet,
        contentsOfDisplay,
        extensions
    );
}; }
    return _cached_decoder_for_DisplayUpdatedEvent(el);
}

let _cached_encoder_for_DisplayUpdatedEvent: $.ASN1Encoder<DisplayUpdatedEvent> | null = null;

/**
 * @summary Encodes a(n) DisplayUpdatedEvent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisplayUpdatedEvent, encoded as an ASN.1 Element.
 */
export
function _encode_DisplayUpdatedEvent (value: DisplayUpdatedEvent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisplayUpdatedEvent) { _cached_encoder_for_DisplayUpdatedEvent = function (value: DisplayUpdatedEvent, elGetter: $.ASN1Encoder<DisplayUpdatedEvent>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SubjectDeviceID(value.device, $.BER),
            /* IF_ABSENT  */ ((value.displayID === undefined) ? undefined : _encode_DisplayID(value.displayID, $.BER)),
            /* REQUIRED   */ $._encodeInteger(value.logicalRows, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.logicalColumns, $.BER),
            /* IF_ABSENT  */ ((value.physicalRows === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.physicalRows, $.BER)),
            /* IF_ABSENT  */ ((value.physicalColumns === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.physicalColumns, $.BER)),
            /* IF_ABSENT  */ ((value.physicalBaseRowNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.physicalBaseRowNumber, $.BER)),
            /* IF_ABSENT  */ ((value.physicalBaseColumnNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.physicalBaseColumnNumber, $.BER)),
            /* IF_ABSENT  */ ((value.characterSet === undefined) ? undefined : _encode_CharacterSet(value.characterSet, $.BER)),
            /* REQUIRED   */ $._encodeIA5String(value.contentsOfDisplay, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : _encode_CSTACommonArguments(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DisplayUpdatedEvent(value, elGetter);
}


/* eslint-enable */
