/* eslint-disable */
import {
    type GeneralizedTime,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NCGI, _decode_NCGI, _encode_NCGI } from "../EpsHI2Operations/NCGI.ta.mjs";
// export { NCGI, _decode_NCGI, _encode_NCGI } from "../EpsHI2Operations/NCGI.ta.mjs";
import { type GSMLocation, _decode_GSMLocation, _encode_GSMLocation } from "../EpsHI2Operations/GSMLocation.ta.mjs";
// export { GSMLocation, _decode_GSMLocation, _encode_GSMLocation } from "../EpsHI2Operations/GSMLocation.ta.mjs";
import { type UMTSLocation, _decode_UMTSLocation, _encode_UMTSLocation } from "../EpsHI2Operations/UMTSLocation.ta.mjs";
// export { UMTSLocation, _decode_UMTSLocation, _encode_UMTSLocation } from "../EpsHI2Operations/UMTSLocation.ta.mjs";


/**
 * @summary AdditionalCellID
 * @description
 * 
 * One secondary-cell identity for the target. The additional-cell parameter
 * reports the primary cell of a secondary cell group when that cell is
 * available; the location parameter reports the primary cell of the primary
 * cell group (table 10.5.2 and the note under that table). Include it when an
 * event table requires location and the secondary cell is known. 3GPP TS 33.108
 * (https://www.3gpp.org/DynaReport/33108.htm).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalCellID ::= SEQUENCE
 * {
 *     nCGI            [1] NCGI,
 *     gsmLocation        [2] GSMLocation OPTIONAL,
 *     umtsLocation    [3] UMTSLocation OPTIONAL,
 *     timeOfLocation    [4] GeneralizedTime OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class AdditionalCellID {
    /**
     * @summary `nCGI`.
     * @description
     * 
     * NR cell identity of this additional cell. Table 10.5.2 describes the
     * parameter as the primary cell of a secondary cell group and does not name
     * this component separately.
     * 
     * @public
     * @readonly
     */
    readonly nCGI: NCGI;
    /**
     * @summary `gsmLocation`.
     * @description
     * 
     * GSM coordinates accompanying this additional cell. Clause 10 does not say
     * when they are required.
     * 
     * @public
     * @readonly
     */
    readonly gsmLocation: OPTIONAL<GSMLocation>;
    /**
     * @summary `umtsLocation`.
     * @description
     * 
     * UMTS geographical-area shape accompanying this additional cell. Clause 10
     * does not say when it is required.
     * 
     * @public
     * @readonly
     */
    readonly umtsLocation: OPTIONAL<UMTSLocation>;
    /**
     * @summary `timeOfLocation`.
     * @description
     * 
     * Time associated with this additional cell. Table 10.5.2 maps Time of
     * Location to the EPS location parameter, not to this component, so the
     * specification text does not say when this timestamp is sent.
     * 
     * @public
     * @readonly
     */
    readonly timeOfLocation: OPTIONAL<GeneralizedTime>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of the specification does not
     * define. Annex D requires the LEMF to ignore an unrecognized parameter and
     * continue with the record.
     * 
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        nCGI: NCGI,
        gsmLocation?: OPTIONAL<GSMLocation>,
        umtsLocation?: OPTIONAL<UMTSLocation>,
        timeOfLocation?: OPTIONAL<GeneralizedTime>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.nCGI = nCGI;
        this.gsmLocation = gsmLocation;
        this.umtsLocation = umtsLocation;
        this.timeOfLocation = timeOfLocation;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a AdditionalCellID
     * @description
     * 
     * This takes an `object` and converts it to a `AdditionalCellID`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AdditionalCellID`.
     * @returns {AdditionalCellID}
     */
    public static _from_object (_o: { [_K in keyof (AdditionalCellID)]: (AdditionalCellID)[_K] }): AdditionalCellID {
        return new AdditionalCellID(_o.nCGI, _o.gsmLocation, _o.umtsLocation, _o.timeOfLocation, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AdditionalCellID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AdditionalCellID: $.ComponentSpec[] = [
    new $.ComponentSpec("nCGI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gsmLocation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("umtsLocation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("timeOfLocation", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of AdditionalCellID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AdditionalCellID: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AdditionalCellID
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AdditionalCellID: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AdditionalCellID: $.ASN1Decoder<AdditionalCellID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalCellID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdditionalCellID (el: _Element): AdditionalCellID {
    if (!_cached_decoder_for_AdditionalCellID) { _cached_decoder_for_AdditionalCellID = function (el: _Element): AdditionalCellID {
    let nCGI!: NCGI;
    let gsmLocation: OPTIONAL<GSMLocation>;
    let umtsLocation: OPTIONAL<UMTSLocation>;
    let timeOfLocation: OPTIONAL<GeneralizedTime>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "nCGI": (_el: _Element): void => { nCGI = $._decode_implicit<NCGI>(() => _decode_NCGI)(_el); },
        "gsmLocation": (_el: _Element): void => { gsmLocation = $._decode_explicit<GSMLocation>(() => _decode_GSMLocation)(_el); },
        "umtsLocation": (_el: _Element): void => { umtsLocation = $._decode_explicit<UMTSLocation>(() => _decode_UMTSLocation)(_el); },
        "timeOfLocation": (_el: _Element): void => { timeOfLocation = $._decode_implicit<GeneralizedTime>(() => $._decodeGeneralizedTime)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AdditionalCellID,
        _extension_additions_list_spec_for_AdditionalCellID,
        _root_component_type_list_2_spec_for_AdditionalCellID,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AdditionalCellID(
        nCGI,
        gsmLocation,
        umtsLocation,
        timeOfLocation,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AdditionalCellID(el);
}

let _cached_encoder_for_AdditionalCellID: $.ASN1Encoder<AdditionalCellID> | null = null;

/**
 * @summary Encodes a(n) AdditionalCellID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalCellID, encoded as an ASN.1 Element.
 */
export
function _encode_AdditionalCellID (value: AdditionalCellID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdditionalCellID) { _cached_encoder_for_AdditionalCellID = function (value: AdditionalCellID, elGetter: $.ASN1Encoder<AdditionalCellID>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_NCGI, $.BER)(value.nCGI, $.BER);
    if (value.gsmLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_GSMLocation, $.BER)(value.gsmLocation, $.BER);
    }
    if (value.umtsLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_UMTSLocation, $.BER)(value.umtsLocation, $.BER);
    }
    if (value.timeOfLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeGeneralizedTime, $.BER)(value.timeOfLocation, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AdditionalCellID(value, elGetter);
}


/* eslint-enable */
