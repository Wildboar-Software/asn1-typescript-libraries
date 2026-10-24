/* eslint-disable */
import {
    type BOOLEAN,
    type OPTIONAL,
    type PrintableString,
    type UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ExtendedLocParameters_mapData, _decode_ExtendedLocParameters_mapData, _encode_ExtendedLocParameters_mapData } from "../UmtsHI2Operations/ExtendedLocParameters-mapData.ta.mjs";
// export { ExtendedLocParameters_mapData, _decode_ExtendedLocParameters_mapData, _encode_ExtendedLocParameters_mapData } from "../UmtsHI2Operations/ExtendedLocParameters-mapData.ta.mjs";
import { ExtendedLocParameters_altitude, _decode_ExtendedLocParameters_altitude, _encode_ExtendedLocParameters_altitude } from "../UmtsHI2Operations/ExtendedLocParameters-altitude.ta.mjs";
// export { ExtendedLocParameters_altitude, _decode_ExtendedLocParameters_altitude, _encode_ExtendedLocParameters_altitude } from "../UmtsHI2Operations/ExtendedLocParameters-altitude.ta.mjs";
import { ExtendedLocParameters_motionStateList, _decode_ExtendedLocParameters_motionStateList, _encode_ExtendedLocParameters_motionStateList } from "../UmtsHI2Operations/ExtendedLocParameters-motionStateList.ta.mjs";
// export { ExtendedLocParameters_motionStateList, _decode_ExtendedLocParameters_motionStateList, _encode_ExtendedLocParameters_motionStateList } from "../UmtsHI2Operations/ExtendedLocParameters-motionStateList.ta.mjs";
import { ExtendedLocParameters_floor, _decode_ExtendedLocParameters_floor, _encode_ExtendedLocParameters_floor } from "../UmtsHI2Operations/ExtendedLocParameters-floor.ta.mjs";
// export { ExtendedLocParameters_floor, _decode_ExtendedLocParameters_floor, _encode_ExtendedLocParameters_floor } from "../UmtsHI2Operations/ExtendedLocParameters-floor.ta.mjs";


/**
 * @summary ExtendedLocParameters
 * @description
 * 
 * Additional location and QoS for a LALS report, mapped from the OMA MLP pos
 * element (TS 33.108 reference [88]). Optional when the LI LCS client has it
 * (tables 6.9H and 6.9I).
 * 
 * If the client cannot map the MLP response into a Location, it copies the raw
 * slia or slirep XML instead. TS 33.108 does not restate the MLP value syntax;
 * each component cites the MLP clause in the annex B.3 comments.
 * 
 * 3GPP TS 33.108, clause 6.5.1.1 and annex B.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedLocParameters ::= SEQUENCE
 * {
 *     posMethod        [0]        PrintableString OPTIONAL, -- clause 5.3.93.1
 *     mapData            [1]                                 -- clause 5.2.2.3
 *                     CHOICE         {base64Map     [0] PrintableString,     -- clause 5.3.12
 *                                 url         [1] PrintableString     -- clause 5.3.138
 *                                 } OPTIONAL,
 *     altitude        [2]
 *                     SEQUENCE     {alt PrintableString, -- clause 5.3.5
 *                                 alt-uncertainty PrintableString OPTIONAL -- clause 5.3.7
 *                                 } OPTIONAL,
 *     speed            [3]     PrintableString OPTIONAL, -- clause 5.3.119
 *     direction        [4]        PrintableString OPTIONAL, -- clause 5.3.26
 *     level-conf        [5]        PrintableString OPTIONAL, -- clause 5.3.24
 *     qOS-not-met        [6]     BOOLEAN OPTIONAL, -- clause 5.3.97
 *     motionStateList [7]                                 -- clause 5.2.2.3
 *                     SEQUENCE    {primaryMotionState     [0] PrintableString, -- clause 5.3.69
 *                                 secondaryMotionState     [1] SEQUENCE OF PrintableString OPTIONAL,
 *                                 confidence                 [2] PrintableString -- clause 5.3.24
 *                                 } OPTIONAL,
 *     floor            [8]
 *                     SEQUENCE     {floor-number PrintableString, -- clause 5.3.39
 *                                 floor-number-uncertainty PrintableString OPTIONAL
 *                                 -- clause 5.3.40
 *                                 } OPTIONAL,
 *     additional-info    [9] PrintableString OPTIONAL, -- clause 5.3.1
 * 
 * -- The following parameter contains a copy of the unparsed XML code of
 * -- MLP response message, i.e. the entire XML document containing
 * -- a <slia> (described in [88], clause 5.2.3.2.2) or
 * -- a <slirep> (described in [88], clause 5.2.3.2.3) MLP message.
 * -- This parameter is present when the LI-LCS client cannot fully map
 * -- the MLP response message into an ASN.1 Location object.
 * 
 *     lALS-rawMLPPosData    [10] UTF8String OPTIONAL,
 * 
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class ExtendedLocParameters {
    /**
     * @summary `posMethod`.
     * @description
     * 
     * Positioning method of the LALS fix, from OMA MLP clause 5.3.93.1. Include
     * it when available. TS 33.108 does not restate that syntax.
     * 
     * 3GPP TS 33.108, annex B.3 and table 6.9H.
     * @public
     * @readonly
     */
    readonly posMethod: OPTIONAL<PrintableString>;
    /**
     * @summary `mapData`.
     * @description
     * 
     * Map for the LALS fix, either embedded or given as a URL. Annex B.3 points
     * this at OMA MLP clause 5.2.2.3. Include it when available.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly mapData: OPTIONAL<ExtendedLocParameters_mapData>;
    /**
     * @summary `altitude`.
     * @description
     * 
     * Altitude of the LALS fix and, when present, its uncertainty. Include it
     * when available.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly altitude: OPTIONAL<ExtendedLocParameters_altitude>;
    /**
     * @summary `speed`.
     * @description
     * 
     * Speed of the LALS fix, from OMA MLP clause 5.3.119. Include it when
     * available. TS 33.108 does not restate that syntax.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly speed: OPTIONAL<PrintableString>;
    /**
     * @summary `direction`.
     * @description
     * 
     * Direction of the LALS fix, from OMA MLP clause 5.3.26. Include it when
     * available. TS 33.108 does not restate that syntax.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly direction: OPTIONAL<PrintableString>;
    /**
     * @summary `level_conf`.
     * @description
     * 
     * Confidence level of the LALS fix, from OMA MLP clause 5.3.24. Include it
     * when available. TS 33.108 does not restate that syntax.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly level_conf: OPTIONAL<PrintableString>;
    /**
     * @summary `qOS_not_met`.
     * @description
     * 
     * MLP indication that the requested positioning QoS was not met (OMA MLP
     * clause 5.3.97). TS 33.108 does not restate when the boolean is true.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly qOS_not_met: OPTIONAL<BOOLEAN>;
    /**
     * @summary `motionStateList`.
     * @description
     * 
     * Motion state of the LALS fix and its confidence, from the OMA MLP pos
     * element. Include it when available.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly motionStateList: OPTIONAL<ExtendedLocParameters_motionStateList>;
    /**
     * @summary `floor`.
     * @description
     * 
     * Floor of the LALS fix and, when present, the uncertainty of the floor
     * number. Include it when available.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly floor: OPTIONAL<ExtendedLocParameters_floor>;
    /**
     * @summary `additional_info`.
     * @description
     * 
     * Additional positioning information, from OMA MLP clause 5.3.1. Include it
     * when available. TS 33.108 does not restate that syntax.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly additional_info: OPTIONAL<PrintableString>;
    /**
     * @summary `lALS_rawMLPPosData`.
     * @description
     * 
     * The MLP response as unparsed XML: a whole slia document (OMA MLP clause
     * 5.2.3.2.2) or a whole slirep document (clause 5.2.3.2.3). Present when
     * the LI LCS client cannot map the response into a Location.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly lALS_rawMLPPosData: OPTIONAL<UTF8String>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     * 
     * Extension additions that this version of annex B.3 does not define. They
     * are retained so a later addition on HI2 is not dropped.
     * 
     * 3GPP TS 33.108, annex B.3.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        posMethod?: OPTIONAL<PrintableString>,
        mapData?: OPTIONAL<ExtendedLocParameters_mapData>,
        altitude?: OPTIONAL<ExtendedLocParameters_altitude>,
        speed?: OPTIONAL<PrintableString>,
        direction?: OPTIONAL<PrintableString>,
        level_conf?: OPTIONAL<PrintableString>,
        qOS_not_met?: OPTIONAL<BOOLEAN>,
        motionStateList?: OPTIONAL<ExtendedLocParameters_motionStateList>,
        floor?: OPTIONAL<ExtendedLocParameters_floor>,
        additional_info?: OPTIONAL<PrintableString>,
        lALS_rawMLPPosData?: OPTIONAL<UTF8String>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.posMethod = posMethod;
        this.mapData = mapData;
        this.altitude = altitude;
        this.speed = speed;
        this.direction = direction;
        this.level_conf = level_conf;
        this.qOS_not_met = qOS_not_met;
        this.motionStateList = motionStateList;
        this.floor = floor;
        this.additional_info = additional_info;
        this.lALS_rawMLPPosData = lALS_rawMLPPosData;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ExtendedLocParameters
     * @description
     * 
     * This takes an `object` and converts it to a `ExtendedLocParameters`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ExtendedLocParameters`.
     * @returns {ExtendedLocParameters}
     */
    public static _from_object (_o: { [_K in keyof (ExtendedLocParameters)]: (ExtendedLocParameters)[_K] }): ExtendedLocParameters {
        return new ExtendedLocParameters(_o.posMethod, _o.mapData, _o.altitude, _o.speed, _o.direction, _o.level_conf, _o.qOS_not_met, _o.motionStateList, _o.floor, _o.additional_info, _o.lALS_rawMLPPosData, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ExtendedLocParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ExtendedLocParameters: $.ComponentSpec[] = [
    new $.ComponentSpec("posMethod", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mapData", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("altitude", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("speed", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("direction", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("level-conf", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("qOS-not-met", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("motionStateList", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("floor", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("additional-info", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("lALS-rawMLPPosData", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of ExtendedLocParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ExtendedLocParameters: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ExtendedLocParameters
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ExtendedLocParameters: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ExtendedLocParameters: $.ASN1Decoder<ExtendedLocParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedLocParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtendedLocParameters (el: _Element): ExtendedLocParameters {
    if (!_cached_decoder_for_ExtendedLocParameters) { _cached_decoder_for_ExtendedLocParameters = function (el: _Element): ExtendedLocParameters {
    let posMethod: OPTIONAL<PrintableString>;
    let mapData: OPTIONAL<ExtendedLocParameters_mapData>;
    let altitude: OPTIONAL<ExtendedLocParameters_altitude>;
    let speed: OPTIONAL<PrintableString>;
    let direction: OPTIONAL<PrintableString>;
    let level_conf: OPTIONAL<PrintableString>;
    let qOS_not_met: OPTIONAL<BOOLEAN>;
    let motionStateList: OPTIONAL<ExtendedLocParameters_motionStateList>;
    let floor: OPTIONAL<ExtendedLocParameters_floor>;
    let additional_info: OPTIONAL<PrintableString>;
    let lALS_rawMLPPosData: OPTIONAL<UTF8String>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "posMethod": (_el: _Element): void => { posMethod = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "mapData": (_el: _Element): void => { mapData = $._decode_explicit<ExtendedLocParameters_mapData>(() => _decode_ExtendedLocParameters_mapData)(_el); },
        "altitude": (_el: _Element): void => { altitude = $._decode_implicit<ExtendedLocParameters_altitude>(() => _decode_ExtendedLocParameters_altitude)(_el); },
        "speed": (_el: _Element): void => { speed = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "direction": (_el: _Element): void => { direction = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "level-conf": (_el: _Element): void => { level_conf = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "qOS-not-met": (_el: _Element): void => { qOS_not_met = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "motionStateList": (_el: _Element): void => { motionStateList = $._decode_implicit<ExtendedLocParameters_motionStateList>(() => _decode_ExtendedLocParameters_motionStateList)(_el); },
        "floor": (_el: _Element): void => { floor = $._decode_implicit<ExtendedLocParameters_floor>(() => _decode_ExtendedLocParameters_floor)(_el); },
        "additional-info": (_el: _Element): void => { additional_info = $._decode_implicit<PrintableString>(() => $._decodePrintableString)(_el); },
        "lALS-rawMLPPosData": (_el: _Element): void => { lALS_rawMLPPosData = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ExtendedLocParameters,
        _extension_additions_list_spec_for_ExtendedLocParameters,
        _root_component_type_list_2_spec_for_ExtendedLocParameters,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ExtendedLocParameters(
        posMethod,
        mapData,
        altitude,
        speed,
        direction,
        level_conf,
        qOS_not_met,
        motionStateList,
        floor,
        additional_info,
        lALS_rawMLPPosData,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ExtendedLocParameters(el);
}

let _cached_encoder_for_ExtendedLocParameters: $.ASN1Encoder<ExtendedLocParameters> | null = null;

/**
 * @summary Encodes a(n) ExtendedLocParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedLocParameters, encoded as an ASN.1 Element.
 */
export
function _encode_ExtendedLocParameters (value: ExtendedLocParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtendedLocParameters) { _cached_encoder_for_ExtendedLocParameters = function (value: ExtendedLocParameters, elGetter: $.ASN1Encoder<ExtendedLocParameters>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(11 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.posMethod !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodePrintableString, $.BER)(value.posMethod, $.BER);
    }
    if (value.mapData !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_ExtendedLocParameters_mapData, $.BER)(value.mapData, $.BER);
    }
    if (value.altitude !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ExtendedLocParameters_altitude, $.BER)(value.altitude, $.BER);
    }
    if (value.speed !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodePrintableString, $.BER)(value.speed, $.BER);
    }
    if (value.direction !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodePrintableString, $.BER)(value.direction, $.BER);
    }
    if (value.level_conf !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodePrintableString, $.BER)(value.level_conf, $.BER);
    }
    if (value.qOS_not_met !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => $._encodeBoolean, $.BER)(value.qOS_not_met, $.BER);
    }
    if (value.motionStateList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_ExtendedLocParameters_motionStateList, $.BER)(value.motionStateList, $.BER);
    }
    if (value.floor !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_ExtendedLocParameters_floor, $.BER)(value.floor, $.BER);
    }
    if (value.additional_info !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => $._encodePrintableString, $.BER)(value.additional_info, $.BER);
    }
    if (value.lALS_rawMLPPosData !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => $._encodeUTF8String, $.BER)(value.lALS_rawMLPPosData, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ExtendedLocParameters(value, elGetter);
}


/* eslint-enable */
