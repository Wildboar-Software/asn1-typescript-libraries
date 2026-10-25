/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS-1-Datatypes/AlertingPattern.ta.mjs";
// export { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS-1-Datatypes/AlertingPattern.ta.mjs";
import { type NumberingPlan, _decode_NumberingPlan, _encode_NumberingPlan } from "../IN-CS-1-Datatypes/NumberingPlan.ta.mjs";
// export { NumberingPlan, _decode_NumberingPlan, _encode_NumberingPlan } from "../IN-CS-1-Datatypes/NumberingPlan.ta.mjs";
import { type OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS-1-Datatypes/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS-1-Datatypes/OriginalCalledPartyID.ta.mjs";
import { type TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-CS-1-Datatypes/TravellingClassMark.ta.mjs";
// export { TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-CS-1-Datatypes/TravellingClassMark.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";
import { type CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS-1-Datatypes/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS-1-Datatypes/CallingPartyNumber.ta.mjs";
import { type CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS-1-Datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS-1-Datatypes/CalledPartyNumber.ta.mjs";


/**
 * @summary CollectInformationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CollectInformationArg ::= SEQUENCE {
 *   alertingPattern        [0]  AlertingPattern OPTIONAL,
 *   numberingPlan          [1]  NumberingPlan OPTIONAL,
 *   originalCalledPartyID  [2]  OriginalCalledPartyID OPTIONAL,
 *   travellingClassMark    [3]  TravellingClassMark OPTIONAL,
 *   extensions
 *     [4]  SEQUENCE SIZE (1..numOfExtensions) OF
 *            ExtensionField,
 *   callingPartyNumber     [5]  CallingPartyNumber OPTIONAL,
 *   dialledDigits          [6]  CalledPartyNumber OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class CollectInformationArg {
    /**
     * @summary `alertingPattern`.
     * @public
     * @readonly
     */
    readonly alertingPattern: OPTIONAL<AlertingPattern>;
    /**
     * @summary `numberingPlan`.
     * @public
     * @readonly
     */
    readonly numberingPlan: OPTIONAL<NumberingPlan>;
    /**
     * @summary `originalCalledPartyID`.
     * @public
     * @readonly
     */
    readonly originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    /**
     * @summary `travellingClassMark`.
     * @public
     * @readonly
     */
    readonly travellingClassMark: OPTIONAL<TravellingClassMark>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: ExtensionField[];
    /**
     * @summary `callingPartyNumber`.
     * @public
     * @readonly
     */
    readonly callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    /**
     * @summary `dialledDigits`.
     * @public
     * @readonly
     */
    readonly dialledDigits: OPTIONAL<CalledPartyNumber>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        alertingPattern: OPTIONAL<AlertingPattern>,
        numberingPlan: OPTIONAL<NumberingPlan>,
        originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>,
        travellingClassMark: OPTIONAL<TravellingClassMark>,
        extensions: ExtensionField[],
        callingPartyNumber?: OPTIONAL<CallingPartyNumber>,
        dialledDigits?: OPTIONAL<CalledPartyNumber>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.alertingPattern = alertingPattern;
        this.numberingPlan = numberingPlan;
        this.originalCalledPartyID = originalCalledPartyID;
        this.travellingClassMark = travellingClassMark;
        this.extensions = extensions;
        this.callingPartyNumber = callingPartyNumber;
        this.dialledDigits = dialledDigits;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CollectInformationArg
     * @description
     * 
     * This takes an `object` and converts it to a `CollectInformationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CollectInformationArg`.
     * @returns {CollectInformationArg}
     */
    public static _from_object (_o: { [_K in keyof (CollectInformationArg)]: (CollectInformationArg)[_K] }): CollectInformationArg {
        return new CollectInformationArg(_o.alertingPattern, _o.numberingPlan, _o.originalCalledPartyID, _o.travellingClassMark, _o.extensions, _o.callingPartyNumber, _o.dialledDigits, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CollectInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CollectInformationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("alertingPattern", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("numberingPlan", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("travellingClassMark", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("dialledDigits", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of CollectInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CollectInformationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CollectInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CollectInformationArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CollectInformationArg: $.ASN1Decoder<CollectInformationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CollectInformationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CollectInformationArg (el: _Element): CollectInformationArg {
    if (!_cached_decoder_for_CollectInformationArg) { _cached_decoder_for_CollectInformationArg = function (el: _Element): CollectInformationArg {
    let alertingPattern: OPTIONAL<AlertingPattern>;
    let numberingPlan: OPTIONAL<NumberingPlan>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let travellingClassMark: OPTIONAL<TravellingClassMark>;
    let extensions!: ExtensionField[];
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    let dialledDigits: OPTIONAL<CalledPartyNumber>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "alertingPattern": (_el: _Element): void => { alertingPattern = $._decode_implicit<AlertingPattern>(() => _decode_AlertingPattern)(_el); },
        "numberingPlan": (_el: _Element): void => { numberingPlan = $._decode_implicit<NumberingPlan>(() => _decode_NumberingPlan)(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_OriginalCalledPartyID)(_el); },
        "travellingClassMark": (_el: _Element): void => { travellingClassMark = $._decode_implicit<TravellingClassMark>(() => _decode_TravellingClassMark)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); },
        "dialledDigits": (_el: _Element): void => { dialledDigits = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CollectInformationArg,
        _extension_additions_list_spec_for_CollectInformationArg,
        _root_component_type_list_2_spec_for_CollectInformationArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CollectInformationArg(
        alertingPattern,
        numberingPlan,
        originalCalledPartyID,
        travellingClassMark,
        extensions,
        callingPartyNumber,
        dialledDigits,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CollectInformationArg(el);
}

let _cached_encoder_for_CollectInformationArg: $.ASN1Encoder<CollectInformationArg> | null = null;

/**
 * @summary Encodes a(n) CollectInformationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CollectInformationArg, encoded as an ASN.1 Element.
 */
export
function _encode_CollectInformationArg (value: CollectInformationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CollectInformationArg) { _cached_encoder_for_CollectInformationArg = function (value: CollectInformationArg, elGetter: $.ASN1Encoder<CollectInformationArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.alertingPattern !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_AlertingPattern, $.BER)(value.alertingPattern, $.BER);
    }
    if (value.numberingPlan !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_NumberingPlan, $.BER)(value.numberingPlan, $.BER);
    }
    if (value.originalCalledPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_OriginalCalledPartyID, $.BER)(value.originalCalledPartyID, $.BER);
    }
    if (value.travellingClassMark !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_TravellingClassMark, $.BER)(value.travellingClassMark, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    if (value.callingPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER);
    }
    if (value.dialledDigits !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_CalledPartyNumber, $.BER)(value.dialledDigits, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CollectInformationArg(value, elGetter);
}


/* eslint-enable */
