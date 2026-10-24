/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
// export { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
import { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
// export { PEI, _decode_PEI, _encode_PEI } from "../TS33128Payloads/PEI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128Payloads/FiveGGUTI.ta.mjs";
// export { FiveGGUTI, _decode_FiveGGUTI, _encode_FiveGGUTI } from "../TS33128Payloads/FiveGGUTI.ta.mjs";
import { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
// export { Location, _decode_Location, _encode_Location } from "../TS33128Payloads/Location.ta.mjs";
import { TAIList, _decode_TAIList, _encode_TAIList } from "../TS33128Payloads/TAIList.ta.mjs";
// export { TAIList, _decode_TAIList, _encode_TAIList } from "../TS33128Payloads/TAIList.ta.mjs";
import { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";
// export { UserIdentifiers, _decode_UserIdentifiers, _encode_UserIdentifiers } from "../TS33128Payloads/UserIdentifiers.ta.mjs";


/**
 * @summary AMFIdentifierAssociation
 * @description
 * 
 * The IRI-POI present in the AMF shall generate an xIRI containing an
 * AMFIdentifierAssociation record when the IRI-POI present in the AMF detects a
 * new identifier association for a UE matching one of the target identifiers
 * provided via LI_X1. Generation of this record is subject to this record type
 * being enabled for a specific target (see clause 6.2.2.2.1).
 *
 * NOTE 1: SUPI shall always be provided, in addition to the warrant target
 * identifier if different to SUPI. Other identifiers shall be provided if
 * available.
 *
 * NOTE 2: List shall be included each time there is a change to the
 * registration area.
 *
 * 3GPP TS 33.128, clause 6.2.2.2.7.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AMFIdentifierAssociation ::= SEQUENCE
 * {
 *     sUPI                      [1] SUPI,
 *     sUCI                      [2] SUCI OPTIONAL,
 *     pEI                       [3] PEI OPTIONAL,
 *     gPSI                      [4] GPSI OPTIONAL,
 *     gUTI                      [5] FiveGGUTI,
 *     location                  [6] Location,
 *     fiveGSTAIList             [7] TAIList OPTIONAL,
 *     additionalUserIdentifiers [8] UserIdentifiers OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AMFIdentifierAssociation {
    /**
     * @summary `sUPI`.
     * @description
     *
     * SUPI associated with the procedure (see NOTE 1). NOTE 1: SUPI shall
     * always be provided, in addition to the warrant target identifier if
     * different to SUPI. Other identifiers shall be provided if available.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.7.
     *
     * @public
     * @readonly
     */
    readonly sUPI: SUPI;
    /**
     * @summary `sUCI`.
     * @description
     *
     * SUCI used in the procedure, if applicable and if available.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.7.
     *
     * @public
     * @readonly
     */
    readonly sUCI: OPTIONAL<SUCI>;
    /**
     * @summary `pEI`.
     * @description
     *
     * PEI used in the procedure, if available (see NOTE 1). NOTE 1: SUPI shall
     * always be provided, in addition to the warrant target identifier if
     * different to SUPI. Other identifiers shall be provided if available.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.7.
     *
     * @public
     * @readonly
     */
    readonly pEI: OPTIONAL<PEI>;
    /**
     * @summary `gPSI`.
     * @description
     *
     * GPSI used in the procedure, if available (see NOTE 1). NOTE 1: SUPI shall
     * always be provided, in addition to the warrant target identifier if
     * different to SUPI. Other identifiers shall be provided if available.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.7.
     *
     * @public
     * @readonly
     */
    readonly gPSI: OPTIONAL<GPSI>;
    /**
     * @summary `gUTI`.
     * @description
     *
     * 5G-GUTI used in the procedure, see TS 24.501 [13] clause 9.11.3.4.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.7.
     *
     * @public
     * @readonly
     */
    readonly gUTI: FiveGGUTI;
    /**
     * @summary `location`.
     * @description
     *
     * Location information available when identifier association occurs. Shall
     * be encoded using the Location.locationInfo.userLocation parameter (see
     * attachment. If available, other parameters reportable via Location shall
     * be included.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.7.
     *
     * @public
     * @readonly
     */
    readonly location: Location;
    /**
     * @summary `fiveGSTAIList`.
     * @description
     *
     * List of tracking areas associated with the registration area within which
     * the UE is current registered, see TS 24.501 [13] clause 9.11.3.9 (see
     * NOTE 2). NOTE 2: List shall be included each time there is a change to
     * the registration area.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.7.
     *
     * @public
     * @readonly
     */
    readonly fiveGSTAIList: OPTIONAL<TAIList>;
    /**
     * @summary `additionalUserIdentifiers`.
     * @description
     *
     * Provides additional user identifiers known at the AMF or stored in AMF
     * context, e.g. additional GPSI.
     *
     * 3GPP TS 33.128, clause 6.2.2.2.7.
     *
     * @public
     * @readonly
     */
    readonly additionalUserIdentifiers: OPTIONAL<UserIdentifiers>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sUPI: SUPI,
        sUCI: OPTIONAL<SUCI>,
        pEI: OPTIONAL<PEI>,
        gPSI: OPTIONAL<GPSI>,
        gUTI: FiveGGUTI,
        location: Location,
        fiveGSTAIList?: OPTIONAL<TAIList>,
        additionalUserIdentifiers?: OPTIONAL<UserIdentifiers>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sUPI = sUPI;
        this.sUCI = sUCI;
        this.pEI = pEI;
        this.gPSI = gPSI;
        this.gUTI = gUTI;
        this.location = location;
        this.fiveGSTAIList = fiveGSTAIList;
        this.additionalUserIdentifiers = additionalUserIdentifiers;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a AMFIdentifierAssociation
     * @description
     * 
     * This takes an `object` and converts it to a `AMFIdentifierAssociation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AMFIdentifierAssociation`.
     * @returns {AMFIdentifierAssociation}
     */
    public static _from_object (_o: { [_K in keyof (AMFIdentifierAssociation)]: (AMFIdentifierAssociation)[_K] }): AMFIdentifierAssociation {
        return new AMFIdentifierAssociation(_o.sUPI, _o.sUCI, _o.pEI, _o.gPSI, _o.gUTI, _o.location, _o.fiveGSTAIList, _o.additionalUserIdentifiers, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AMFIdentifierAssociation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AMFIdentifierAssociation: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sUCI", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pEI", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("gPSI", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("gUTI", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("location", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("fiveGSTAIList", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("additionalUserIdentifiers", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of AMFIdentifierAssociation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AMFIdentifierAssociation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AMFIdentifierAssociation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AMFIdentifierAssociation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AMFIdentifierAssociation: $.ASN1Decoder<AMFIdentifierAssociation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AMFIdentifierAssociation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AMFIdentifierAssociation (el: _Element): AMFIdentifierAssociation {
    if (!_cached_decoder_for_AMFIdentifierAssociation) { _cached_decoder_for_AMFIdentifierAssociation = function (el: _Element): AMFIdentifierAssociation {
    let sUPI!: SUPI;
    let sUCI: OPTIONAL<SUCI>;
    let pEI: OPTIONAL<PEI>;
    let gPSI: OPTIONAL<GPSI>;
    let gUTI!: FiveGGUTI;
    let location!: Location;
    let fiveGSTAIList: OPTIONAL<TAIList>;
    let additionalUserIdentifiers: OPTIONAL<UserIdentifiers>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "sUCI": (_el: _Element): void => { sUCI = $._decode_implicit<SUCI>(() => _decode_SUCI)(_el); },
        "pEI": (_el: _Element): void => { pEI = $._decode_explicit<PEI>(() => _decode_PEI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "gUTI": (_el: _Element): void => { gUTI = $._decode_implicit<FiveGGUTI>(() => _decode_FiveGGUTI)(_el); },
        "location": (_el: _Element): void => { location = $._decode_implicit<Location>(() => _decode_Location)(_el); },
        "fiveGSTAIList": (_el: _Element): void => { fiveGSTAIList = $._decode_implicit<TAIList>(() => _decode_TAIList)(_el); },
        "additionalUserIdentifiers": (_el: _Element): void => { additionalUserIdentifiers = $._decode_implicit<UserIdentifiers>(() => _decode_UserIdentifiers)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AMFIdentifierAssociation,
        _extension_additions_list_spec_for_AMFIdentifierAssociation,
        _root_component_type_list_2_spec_for_AMFIdentifierAssociation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AMFIdentifierAssociation(
        sUPI,
        sUCI,
        pEI,
        gPSI,
        gUTI,
        location,
        fiveGSTAIList,
        additionalUserIdentifiers,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AMFIdentifierAssociation(el);
}

let _cached_encoder_for_AMFIdentifierAssociation: $.ASN1Encoder<AMFIdentifierAssociation> | null = null;

/**
 * @summary Encodes a(n) AMFIdentifierAssociation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AMFIdentifierAssociation, encoded as an ASN.1 Element.
 */
export
function _encode_AMFIdentifierAssociation (value: AMFIdentifierAssociation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AMFIdentifierAssociation) { _cached_encoder_for_AMFIdentifierAssociation = function (value: AMFIdentifierAssociation, elGetter: $.ASN1Encoder<AMFIdentifierAssociation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(8 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER);
    if (value.sUCI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SUCI, $.BER)(value.sUCI, $.BER);
    }
    if (value.pEI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_PEI, $.BER)(value.pEI, $.BER);
    }
    if (value.gPSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 5, () => _encode_FiveGGUTI, $.BER)(value.gUTI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_Location, $.BER)(value.location, $.BER);
    if (value.fiveGSTAIList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_TAIList, $.BER)(value.fiveGSTAIList, $.BER);
    }
    if (value.additionalUserIdentifiers !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_UserIdentifiers, $.BER)(value.additionalUserIdentifiers, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AMFIdentifierAssociation(value, elGetter);
}


/* eslint-enable */
