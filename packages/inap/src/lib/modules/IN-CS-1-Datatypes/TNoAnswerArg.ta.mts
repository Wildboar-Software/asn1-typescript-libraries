/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DpSpecificCommonParameters, _decode_DpSpecificCommonParameters, _encode_DpSpecificCommonParameters } from "../IN-CS-1-Datatypes/DpSpecificCommonParameters.ta.mjs";
// export { DpSpecificCommonParameters, _decode_DpSpecificCommonParameters, _encode_DpSpecificCommonParameters } from "../IN-CS-1-Datatypes/DpSpecificCommonParameters.ta.mjs";
import { CalledPartyBusinessGroupID, _decode_CalledPartyBusinessGroupID, _encode_CalledPartyBusinessGroupID } from "../IN-CS-1-Datatypes/CalledPartyBusinessGroupID.ta.mjs";
// export { CalledPartyBusinessGroupID, _decode_CalledPartyBusinessGroupID, _encode_CalledPartyBusinessGroupID } from "../IN-CS-1-Datatypes/CalledPartyBusinessGroupID.ta.mjs";
import { CalledPartySubaddress, _decode_CalledPartySubaddress, _encode_CalledPartySubaddress } from "../IN-CS-1-Datatypes/CalledPartySubaddress.ta.mjs";
// export { CalledPartySubaddress, _decode_CalledPartySubaddress, _encode_CalledPartySubaddress } from "../IN-CS-1-Datatypes/CalledPartySubaddress.ta.mjs";
import { FacilityGroup, _decode_FacilityGroup, _encode_FacilityGroup } from "../IN-CS-1-Datatypes/FacilityGroup.ta.mjs";
// export { FacilityGroup, _decode_FacilityGroup, _encode_FacilityGroup } from "../IN-CS-1-Datatypes/FacilityGroup.ta.mjs";
import { FacilityGroupMember, _decode_FacilityGroupMember, _encode_FacilityGroupMember } from "../IN-CS-1-Datatypes/FacilityGroupMember.ta.mjs";
// export { FacilityGroupMember, _decode_FacilityGroupMember, _encode_FacilityGroupMember } from "../IN-CS-1-Datatypes/FacilityGroupMember.ta.mjs";
import { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS-1-Datatypes/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS-1-Datatypes/OriginalCalledPartyID.ta.mjs";
import { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../IN-CS-1-Datatypes/RedirectingPartyID.ta.mjs";
// export { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../IN-CS-1-Datatypes/RedirectingPartyID.ta.mjs";
import { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../IN-CS-1-Datatypes/RedirectionInformation.ta.mjs";
// export { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../IN-CS-1-Datatypes/RedirectionInformation.ta.mjs";
import { TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-CS-1-Datatypes/TravellingClassMark.ta.mjs";
// export { TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-CS-1-Datatypes/TravellingClassMark.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";


/**
 * @summary TNoAnswerArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TNoAnswerArg ::= SEQUENCE {
 *   dpSpecificCommonParameters  [0]  DpSpecificCommonParameters,
 *   calledPartyBusinessGroupID  [1]  CalledPartyBusinessGroupID OPTIONAL,
 *   calledPartySubaddress       [2]  CalledPartySubaddress OPTIONAL,
 *   calledFacilityGroup         [3]  FacilityGroup OPTIONAL,
 *   calledFacilityGroupMember   [4]  FacilityGroupMember OPTIONAL,
 *   originalCalledPartyID       [5]  OriginalCalledPartyID OPTIONAL,
 *   redirectingPartyID          [6]  RedirectingPartyID OPTIONAL,
 *   redirectionInformation      [7]  RedirectionInformation OPTIONAL,
 *   travellingClassMark         [8]  TravellingClassMark OPTIONAL,
 *   extensions
 *     [9]  SEQUENCE SIZE (1..numOfExtensions) OF
 *            [3]  ExtensionField,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class TNoAnswerArg {
    /**
     * @summary `dpSpecificCommonParameters`.
     * @public
     * @readonly
     */
    readonly dpSpecificCommonParameters: DpSpecificCommonParameters;
    /**
     * @summary `calledPartyBusinessGroupID`.
     * @public
     * @readonly
     */
    readonly calledPartyBusinessGroupID: OPTIONAL<CalledPartyBusinessGroupID>;
    /**
     * @summary `calledPartySubaddress`.
     * @public
     * @readonly
     */
    readonly calledPartySubaddress: OPTIONAL<CalledPartySubaddress>;
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
     * @summary `redirectingPartyID`.
     * @public
     * @readonly
     */
    readonly redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    /**
     * @summary `redirectionInformation`.
     * @public
     * @readonly
     */
    readonly redirectionInformation: OPTIONAL<RedirectionInformation>;
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
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        dpSpecificCommonParameters: DpSpecificCommonParameters,
        calledPartyBusinessGroupID: OPTIONAL<CalledPartyBusinessGroupID>,
        calledPartySubaddress: OPTIONAL<CalledPartySubaddress>,
        calledFacilityGroup: OPTIONAL<FacilityGroup>,
        calledFacilityGroupMember: OPTIONAL<FacilityGroupMember>,
        originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>,
        redirectingPartyID: OPTIONAL<RedirectingPartyID>,
        redirectionInformation: OPTIONAL<RedirectionInformation>,
        travellingClassMark: OPTIONAL<TravellingClassMark>,
        extensions: ExtensionField[],
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.dpSpecificCommonParameters = dpSpecificCommonParameters;
        this.calledPartyBusinessGroupID = calledPartyBusinessGroupID;
        this.calledPartySubaddress = calledPartySubaddress;
        this.calledFacilityGroup = calledFacilityGroup;
        this.calledFacilityGroupMember = calledFacilityGroupMember;
        this.originalCalledPartyID = originalCalledPartyID;
        this.redirectingPartyID = redirectingPartyID;
        this.redirectionInformation = redirectionInformation;
        this.travellingClassMark = travellingClassMark;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TNoAnswerArg
     * @description
     * 
     * This takes an `object` and converts it to a `TNoAnswerArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TNoAnswerArg`.
     * @returns {TNoAnswerArg}
     */
    public static _from_object (_o: { [_K in keyof (TNoAnswerArg)]: (TNoAnswerArg)[_K] }): TNoAnswerArg {
        return new TNoAnswerArg(_o.dpSpecificCommonParameters, _o.calledPartyBusinessGroupID, _o.calledPartySubaddress, _o.calledFacilityGroup, _o.calledFacilityGroupMember, _o.originalCalledPartyID, _o.redirectingPartyID, _o.redirectionInformation, _o.travellingClassMark, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TNoAnswerArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TNoAnswerArg: $.ComponentSpec[] = [
    new $.ComponentSpec("dpSpecificCommonParameters", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("calledPartyBusinessGroupID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("calledPartySubaddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("calledFacilityGroup", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("calledFacilityGroupMember", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("redirectingPartyID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("redirectionInformation", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("travellingClassMark", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("extensions", false, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of TNoAnswerArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TNoAnswerArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TNoAnswerArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TNoAnswerArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TNoAnswerArg: $.ASN1Decoder<TNoAnswerArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TNoAnswerArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TNoAnswerArg (el: _Element): TNoAnswerArg {
    if (!_cached_decoder_for_TNoAnswerArg) { _cached_decoder_for_TNoAnswerArg = function (el: _Element): TNoAnswerArg {
    let dpSpecificCommonParameters!: DpSpecificCommonParameters;
    let calledPartyBusinessGroupID: OPTIONAL<CalledPartyBusinessGroupID>;
    let calledPartySubaddress: OPTIONAL<CalledPartySubaddress>;
    let calledFacilityGroup: OPTIONAL<FacilityGroup>;
    let calledFacilityGroupMember: OPTIONAL<FacilityGroupMember>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    let redirectionInformation: OPTIONAL<RedirectionInformation>;
    let travellingClassMark: OPTIONAL<TravellingClassMark>;
    let extensions!: ExtensionField[];
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "dpSpecificCommonParameters": (_el: _Element): void => { dpSpecificCommonParameters = $._decode_implicit<DpSpecificCommonParameters>(() => _decode_DpSpecificCommonParameters)(_el); },
        "calledPartyBusinessGroupID": (_el: _Element): void => { calledPartyBusinessGroupID = $._decode_implicit<CalledPartyBusinessGroupID>(() => _decode_CalledPartyBusinessGroupID)(_el); },
        "calledPartySubaddress": (_el: _Element): void => { calledPartySubaddress = $._decode_implicit<CalledPartySubaddress>(() => _decode_CalledPartySubaddress)(_el); },
        "calledFacilityGroup": (_el: _Element): void => { calledFacilityGroup = $._decode_explicit<FacilityGroup>(() => _decode_FacilityGroup)(_el); },
        "calledFacilityGroupMember": (_el: _Element): void => { calledFacilityGroupMember = $._decode_implicit<FacilityGroupMember>(() => _decode_FacilityGroupMember)(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_OriginalCalledPartyID)(_el); },
        "redirectingPartyID": (_el: _Element): void => { redirectingPartyID = $._decode_implicit<RedirectingPartyID>(() => _decode_RedirectingPartyID)(_el); },
        "redirectionInformation": (_el: _Element): void => { redirectionInformation = $._decode_implicit<RedirectionInformation>(() => _decode_RedirectionInformation)(_el); },
        "travellingClassMark": (_el: _Element): void => { travellingClassMark = $._decode_implicit<TravellingClassMark>(() => _decode_TravellingClassMark)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => $._decode_implicit<ExtensionField>(() => _decode_ExtensionField)))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TNoAnswerArg,
        _extension_additions_list_spec_for_TNoAnswerArg,
        _root_component_type_list_2_spec_for_TNoAnswerArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TNoAnswerArg(
        dpSpecificCommonParameters,
        calledPartyBusinessGroupID,
        calledPartySubaddress,
        calledFacilityGroup,
        calledFacilityGroupMember,
        originalCalledPartyID,
        redirectingPartyID,
        redirectionInformation,
        travellingClassMark,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TNoAnswerArg(el);
}

let _cached_encoder_for_TNoAnswerArg: $.ASN1Encoder<TNoAnswerArg> | null = null;

/**
 * @summary Encodes a(n) TNoAnswerArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TNoAnswerArg, encoded as an ASN.1 Element.
 */
export
function _encode_TNoAnswerArg (value: TNoAnswerArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TNoAnswerArg) { _cached_encoder_for_TNoAnswerArg = function (value: TNoAnswerArg, elGetter: $.ASN1Encoder<TNoAnswerArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(10 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DpSpecificCommonParameters, $.BER)(value.dpSpecificCommonParameters, $.BER);
    if (value.calledPartyBusinessGroupID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CalledPartyBusinessGroupID, $.BER)(value.calledPartyBusinessGroupID, $.BER);
    }
    if (value.calledPartySubaddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CalledPartySubaddress, $.BER)(value.calledPartySubaddress, $.BER);
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
    if (value.redirectingPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_RedirectingPartyID, $.BER)(value.redirectingPartyID, $.BER);
    }
    if (value.redirectionInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_RedirectionInformation, $.BER)(value.redirectionInformation, $.BER);
    }
    if (value.travellingClassMark !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_TravellingClassMark, $.BER)(value.travellingClassMark, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 9, () => $._encodeSequenceOf<ExtensionField>(() => $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionField, $.BER), $.BER), $.BER)(value.extensions, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TNoAnswerArg(value, elGetter);
}


/* eslint-enable */
