/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RANCGI, _decode_RANCGI, _encode_RANCGI } from "../TS33128Payloads/RANCGI.ta.mjs";
// export { RANCGI, _decode_RANCGI, _encode_RANCGI } from "../TS33128Payloads/RANCGI.ta.mjs";
import { CellSiteInformation, _decode_CellSiteInformation, _encode_CellSiteInformation } from "../TS33128Payloads/CellSiteInformation.ta.mjs";
// export { CellSiteInformation, _decode_CellSiteInformation, _encode_CellSiteInformation } from "../TS33128Payloads/CellSiteInformation.ta.mjs";
import { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
// export { Timestamp, _decode_Timestamp, _encode_Timestamp } from "../TS33128Payloads/Timestamp.ta.mjs";
import { CellRadioRelatedInformation, _decode_CellRadioRelatedInformation, _encode_CellRadioRelatedInformation } from "../TS33128Payloads/CellRadioRelatedInformation.ta.mjs";
// export { CellRadioRelatedInformation, _decode_CellRadioRelatedInformation, _encode_CellRadioRelatedInformation } from "../TS33128Payloads/CellRadioRelatedInformation.ta.mjs";
import { RFBand, _decode_RFBand, _encode_RFBand } from "../TS33128Payloads/RFBand.ta.mjs";
// export { RFBand, _decode_RFBand, _encode_RFBand } from "../TS33128Payloads/RFBand.ta.mjs";


/**
 * @summary CellInformation
 * @description
 * 
 * The cell site information is encoded as the cellSiteInformation ASN.1
 * parameter and delivered either within the location field of an IRI message
 * carrying the respective cell identity, or in a stand-alone IRI message
 * containing the MDFCellSiteReport record.
 *
 * The cell radio related information is encoded as the
 * cellRadioRelatedInformation ASN.1 parameter and delivered with the cell
 * information parameter.
 *
 * The MDF2 shall use the IRI message containing the MDFCellSiteReport record to
 * convey cell site information and cell radio related information retrieved
 * asynchronously with the sending of the IRI message that caused the retrieval.
 * The MDFCellSiteReport record shall be delivered as an IRI REPORT (see ETSI TS
 * 102 232-1 [9] clause 5.2.10) and allocated the same CIN, if any, as the IRI
 * message that caused the retrieval.
 *
 * When the cell site information and cell radio related information are readily
 * available at MDF2 or are retrieved synchronously (i.e. blocking the sending
 * of the IRI message until the retrieval is complete), the cell site
 * information shall be conveyed within the location field of the IRI message
 * that caused the retrieval.
 *
 * The cell site information and associated cell radio related information for
 * multiple cell identities can be delivered to the LEMF within an IRI message
 * that carries the respective cell identities or within the IRI message
 * containing the MDFCellSiteReport record (see Annex A).
 *
 * The MDF2 generating the IRI message MDFCellSiteReport shall set the Payload
 * Direction field in the PDU header to not applicable (Direction Value 5, see
 * ETSI TS 103 221-2 [8] clause 5.2.6).
 *
 * The MDFCellSiteReport consists of a sequence of cellInformation as described
 * in the following tables.
 *
 * 3GPP TS 33.128, clause 7.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CellInformation ::= SEQUENCE
 * {
 *     rANCGI                      [1] RANCGI,
 *     cellSiteinformation         [2] CellSiteInformation OPTIONAL,
 *     timeOfLocation              [3] Timestamp OPTIONAL,
 *     cellRadioRelatedInformation [4] CellRadioRelatedInformation OPTIONAL,
 *     band                        [5] RFBand OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CellInformation {
    /**
     * @summary `rANCGI`.
     * @description
     *
     * The RAN CGI for the cell being reported.
     *
     * 3GPP TS 33.128, clause 7.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly rANCGI: RANCGI;
    /**
     * @summary `cellSiteinformation`.
     * @description
     *
     * Contains location information for the cell site being reported. Shall be
     * present if known at the NF where the POI is located or at the MDF.
     *
     * 3GPP TS 33.128, clause 7.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly cellSiteinformation: OPTIONAL<CellSiteInformation>;
    /**
     * @summary `timeOfLocation`.
     * @description
     *
     * The time the cell site information was determined.
     *
     * 3GPP TS 33.128, clause 7.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly timeOfLocation: OPTIONAL<Timestamp>;
    /**
     * @summary `cellRadioRelatedInformation`.
     * @description
     *
     * Radio Information of reported cell to include either NG Information, F1
     * Information, or S1 Information.
     *
     * 3GPP TS 33.128, clause 7.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly cellRadioRelatedInformation: OPTIONAL<CellRadioRelatedInformation>;
    /**
     * @summary `band`.
     * @description
     *
     * RFBand of reported cell.
     *
     * 3GPP TS 33.128, clause 7.3.2.2.
     *
     * @public
     * @readonly
     */
    readonly band: OPTIONAL<RFBand>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        rANCGI: RANCGI,
        cellSiteinformation?: OPTIONAL<CellSiteInformation>,
        timeOfLocation?: OPTIONAL<Timestamp>,
        cellRadioRelatedInformation?: OPTIONAL<CellRadioRelatedInformation>,
        band?: OPTIONAL<RFBand>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.rANCGI = rANCGI;
        this.cellSiteinformation = cellSiteinformation;
        this.timeOfLocation = timeOfLocation;
        this.cellRadioRelatedInformation = cellRadioRelatedInformation;
        this.band = band;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a CellInformation
     * @description
     * 
     * This takes an `object` and converts it to a `CellInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CellInformation`.
     * @returns {CellInformation}
     */
    public static _from_object (_o: { [_K in keyof (CellInformation)]: (CellInformation)[_K] }): CellInformation {
        return new CellInformation(_o.rANCGI, _o.cellSiteinformation, _o.timeOfLocation, _o.cellRadioRelatedInformation, _o.band, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CellInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CellInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("rANCGI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cellSiteinformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("timeOfLocation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("cellRadioRelatedInformation", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("band", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of CellInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CellInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CellInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CellInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CellInformation: $.ASN1Decoder<CellInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CellInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CellInformation (el: _Element): CellInformation {
    if (!_cached_decoder_for_CellInformation) { _cached_decoder_for_CellInformation = function (el: _Element): CellInformation {
    let rANCGI!: RANCGI;
    let cellSiteinformation: OPTIONAL<CellSiteInformation>;
    let timeOfLocation: OPTIONAL<Timestamp>;
    let cellRadioRelatedInformation: OPTIONAL<CellRadioRelatedInformation>;
    let band: OPTIONAL<RFBand>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "rANCGI": (_el: _Element): void => { rANCGI = $._decode_explicit<RANCGI>(() => _decode_RANCGI)(_el); },
        "cellSiteinformation": (_el: _Element): void => { cellSiteinformation = $._decode_implicit<CellSiteInformation>(() => _decode_CellSiteInformation)(_el); },
        "timeOfLocation": (_el: _Element): void => { timeOfLocation = $._decode_implicit<Timestamp>(() => _decode_Timestamp)(_el); },
        "cellRadioRelatedInformation": (_el: _Element): void => { cellRadioRelatedInformation = $._decode_explicit<CellRadioRelatedInformation>(() => _decode_CellRadioRelatedInformation)(_el); },
        "band": (_el: _Element): void => { band = $._decode_implicit<RFBand>(() => _decode_RFBand)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CellInformation,
        _extension_additions_list_spec_for_CellInformation,
        _root_component_type_list_2_spec_for_CellInformation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CellInformation(
        rANCGI,
        cellSiteinformation,
        timeOfLocation,
        cellRadioRelatedInformation,
        band,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CellInformation(el);
}

let _cached_encoder_for_CellInformation: $.ASN1Encoder<CellInformation> | null = null;

/**
 * @summary Encodes a(n) CellInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CellInformation, encoded as an ASN.1 Element.
 */
export
function _encode_CellInformation (value: CellInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CellInformation) { _cached_encoder_for_CellInformation = function (value: CellInformation, elGetter: $.ASN1Encoder<CellInformation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_RANCGI, $.BER)(value.rANCGI, $.BER);
    if (value.cellSiteinformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CellSiteInformation, $.BER)(value.cellSiteinformation, $.BER);
    }
    if (value.timeOfLocation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Timestamp, $.BER)(value.timeOfLocation, $.BER);
    }
    if (value.cellRadioRelatedInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_CellRadioRelatedInformation, $.BER)(value.cellRadioRelatedInformation, $.BER);
    }
    if (value.band !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_RFBand, $.BER)(value.band, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CellInformation(value, elGetter);
}


/* eslint-enable */
