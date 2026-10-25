/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS-1-Datatypes/AlertingPattern.ta.mjs";
// export { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS-1-Datatypes/AlertingPattern.ta.mjs";
import { type CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS-1-Datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS-1-Datatypes/CalledPartyNumber.ta.mjs";
import { type ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-CS-1-Datatypes/ISDNAccessRelatedInformation.ta.mjs";
// export { ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-CS-1-Datatypes/ISDNAccessRelatedInformation.ta.mjs";
import { type FacilityGroup, _decode_FacilityGroup, _encode_FacilityGroup } from "../IN-CS-1-Datatypes/FacilityGroup.ta.mjs";
// export { FacilityGroup, _decode_FacilityGroup, _encode_FacilityGroup } from "../IN-CS-1-Datatypes/FacilityGroup.ta.mjs";
import { type FacilityGroupMember, _decode_FacilityGroupMember, _encode_FacilityGroupMember } from "../IN-CS-1-Datatypes/FacilityGroupMember.ta.mjs";
// export { FacilityGroupMember, _decode_FacilityGroupMember, _encode_FacilityGroupMember } from "../IN-CS-1-Datatypes/FacilityGroupMember.ta.mjs";
import { type OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS-1-Datatypes/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS-1-Datatypes/OriginalCalledPartyID.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";


/**
 * @summary SelectFacilityArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SelectFacilityArg ::= SEQUENCE {
 *   alertingPattern                  [0]  AlertingPattern OPTIONAL,
 *   destinationNumberRoutingAddress  [1]  CalledPartyNumber OPTIONAL,
 *   iSDNAccessRelatedInformation     [2]  ISDNAccessRelatedInformation OPTIONAL,
 *   calledFacilityGroup              [3]  FacilityGroup OPTIONAL,
 *   calledFacilityGroupMember        [4]  FacilityGroupMember OPTIONAL,
 *   originalCalledPartyID            [5]  OriginalCalledPartyID OPTIONAL,
 *   extensions
 *     [6]  SEQUENCE SIZE (1..numOfExtensions) OF
 *            ExtensionField,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class SelectFacilityArg {
    /**
     * @summary `alertingPattern`.
     * @public
     * @readonly
     */
    readonly alertingPattern: OPTIONAL<AlertingPattern>;
    /**
     * @summary `destinationNumberRoutingAddress`.
     * @public
     * @readonly
     */
    readonly destinationNumberRoutingAddress: OPTIONAL<CalledPartyNumber>;
    /**
     * @summary `iSDNAccessRelatedInformation`.
     * @public
     * @readonly
     */
    readonly iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>;
    /**
     * @summary `calledFacilityGroup`.
     * @public
     * @readonly
     */
    readonly calledFacilityGroup: OPTIONAL<FacilityGroup>;
    /**
     * @summary `calledFacilityGroupMember`.
     * @public
     * @readonly
     */
    readonly calledFacilityGroupMember: OPTIONAL<FacilityGroupMember>;
    /**
     * @summary `originalCalledPartyID`.
     * @public
     * @readonly
     */
    readonly originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: ExtensionField[];
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        alertingPattern: OPTIONAL<AlertingPattern>,
        destinationNumberRoutingAddress: OPTIONAL<CalledPartyNumber>,
        iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>,
        calledFacilityGroup: OPTIONAL<FacilityGroup>,
        calledFacilityGroupMember: OPTIONAL<FacilityGroupMember>,
        originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>,
        extensions: ExtensionField[],
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.alertingPattern = alertingPattern;
        this.destinationNumberRoutingAddress = destinationNumberRoutingAddress;
        this.iSDNAccessRelatedInformation = iSDNAccessRelatedInformation;
        this.calledFacilityGroup = calledFacilityGroup;
        this.calledFacilityGroupMember = calledFacilityGroupMember;
        this.originalCalledPartyID = originalCalledPartyID;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SelectFacilityArg
     * @description
     * 
     * This takes an `object` and converts it to a `SelectFacilityArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SelectFacilityArg`.
     * @returns {SelectFacilityArg}
     */
    public static _from_object (_o: { [_K in keyof (SelectFacilityArg)]: (SelectFacilityArg)[_K] }): SelectFacilityArg {
        return new SelectFacilityArg(_o.alertingPattern, _o.destinationNumberRoutingAddress, _o.iSDNAccessRelatedInformation, _o.calledFacilityGroup, _o.calledFacilityGroupMember, _o.originalCalledPartyID, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SelectFacilityArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SelectFacilityArg: $.ComponentSpec[] = [
    new $.ComponentSpec("alertingPattern", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("destinationNumberRoutingAddress", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iSDNAccessRelatedInformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("calledFacilityGroup", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("calledFacilityGroupMember", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("extensions", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of SelectFacilityArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SelectFacilityArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SelectFacilityArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SelectFacilityArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SelectFacilityArg: $.ASN1Decoder<SelectFacilityArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SelectFacilityArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SelectFacilityArg (el: _Element): SelectFacilityArg {
    if (!_cached_decoder_for_SelectFacilityArg) { _cached_decoder_for_SelectFacilityArg = function (el: _Element): SelectFacilityArg {
    let alertingPattern: OPTIONAL<AlertingPattern>;
    let destinationNumberRoutingAddress: OPTIONAL<CalledPartyNumber>;
    let iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>;
    let calledFacilityGroup: OPTIONAL<FacilityGroup>;
    let calledFacilityGroupMember: OPTIONAL<FacilityGroupMember>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let extensions!: ExtensionField[];
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "alertingPattern": (_el: _Element): void => { alertingPattern = $._decode_implicit<AlertingPattern>(() => _decode_AlertingPattern)(_el); },
        "destinationNumberRoutingAddress": (_el: _Element): void => { destinationNumberRoutingAddress = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "iSDNAccessRelatedInformation": (_el: _Element): void => { iSDNAccessRelatedInformation = $._decode_implicit<ISDNAccessRelatedInformation>(() => _decode_ISDNAccessRelatedInformation)(_el); },
        "calledFacilityGroup": (_el: _Element): void => { calledFacilityGroup = $._decode_explicit<FacilityGroup>(() => _decode_FacilityGroup)(_el); },
        "calledFacilityGroupMember": (_el: _Element): void => { calledFacilityGroupMember = $._decode_implicit<FacilityGroupMember>(() => _decode_FacilityGroupMember)(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_OriginalCalledPartyID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SelectFacilityArg,
        _extension_additions_list_spec_for_SelectFacilityArg,
        _root_component_type_list_2_spec_for_SelectFacilityArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SelectFacilityArg(
        alertingPattern,
        destinationNumberRoutingAddress,
        iSDNAccessRelatedInformation,
        calledFacilityGroup,
        calledFacilityGroupMember,
        originalCalledPartyID,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SelectFacilityArg(el);
}

let _cached_encoder_for_SelectFacilityArg: $.ASN1Encoder<SelectFacilityArg> | null = null;

/**
 * @summary Encodes a(n) SelectFacilityArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SelectFacilityArg, encoded as an ASN.1 Element.
 */
export
function _encode_SelectFacilityArg (value: SelectFacilityArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SelectFacilityArg) { _cached_encoder_for_SelectFacilityArg = function (value: SelectFacilityArg, elGetter: $.ASN1Encoder<SelectFacilityArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.alertingPattern !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_AlertingPattern, $.BER)(value.alertingPattern, $.BER);
    }
    if (value.destinationNumberRoutingAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CalledPartyNumber, $.BER)(value.destinationNumberRoutingAddress, $.BER);
    }
    if (value.iSDNAccessRelatedInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ISDNAccessRelatedInformation, $.BER)(value.iSDNAccessRelatedInformation, $.BER);
    }
    if (value.calledFacilityGroup !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_FacilityGroup, $.BER)(value.calledFacilityGroup, $.BER);
    }
    if (value.calledFacilityGroupMember !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_FacilityGroupMember, $.BER)(value.calledFacilityGroupMember, $.BER);
    }
    if (value.originalCalledPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_OriginalCalledPartyID, $.BER)(value.originalCalledPartyID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SelectFacilityArg(value, elGetter);
}


/* eslint-enable */
