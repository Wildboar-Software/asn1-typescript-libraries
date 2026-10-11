/* eslint-disable */
import {
    BOOLEAN,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { StreamMode, _decode_StreamMode, _encode_StreamMode, _enum_for_StreamMode } from "../MEDIA-GATEWAY-CONTROL/StreamMode.ta.mjs";
import { PropertyParm, _decode_PropertyParm, _encode_PropertyParm } from "../MEDIA-GATEWAY-CONTROL/PropertyParm.ta.mjs";


/**
 * @summary LocalControlDescriptor
 * @description
 * 
 * Stream properties that concern the MG and the MGC, rather than the remote
 * peer (ITU-T Rec. H.248.1 (03/2013) clause 7.1.7).
 *
 * A new LocalControl descriptor replaces the previous one, so anything that
 * must survive is sent again. Mode controls media flow at the edge of the
 * context and takes precedence over any mode written into Local or Remote
 * session descriptions. The default mode is Inactive, so a session description
 * that names a mode does nothing until LocalControl mode is set explicitly.
 * Signals and events are unaffected by mode. Statistics are affected only when
 * the statistic's own meaning involves the direction that mode enables.
 *
 * ReserveValue and ReserveGroup default to false.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocalControlDescriptor ::= SEQUENCE
 *     {
 *     streamMode                        [0] StreamMode OPTIONAL,
 *     reserveValue                    [1] BOOLEAN OPTIONAL,
 *     reserveGroup                    [2] BOOLEAN OPTIONAL,
 *     propertyParms                    [3] SEQUENCE OF PropertyParm,
 *     ...
 *     }
 * ```
 * 
 * @class
 */
export
class LocalControlDescriptor {
    constructor (
        /**
         * @summary `streamMode`.
         * @description
         *
         * Direction of media for this stream across the edge of the context.
         * Default Inactive. Also called Mode in the prose of the
         * Recommendation; the two names are the same property (clause 7.1.7).
         *
         * @public
         * @readonly
         */
        readonly streamMode: OPTIONAL<StreamMode>,
        /**
         * @summary `reserveValue`.
         * @description
         *
         * True: reserve as many alternative property values as the MG can
         * within the selected group, or within each group if ReserveGroup is
         * also true. False: reserve one set. Default false (clause 7.1.7.1.3).
         *
         * @public
         * @readonly
         */
        readonly reserveValue: OPTIONAL<BOOLEAN>,
        /**
         * @summary `reserveGroup`.
         * @description
         *
         * True: reserve as many Local/Remote property groups as the MG can.
         * False: reserve one group from Local and one from Remote. Default
         * false (clause 7.1.7.1.2). A property group is one `PropertyGroup`, or
         * one SDP session description in the text encoding.
         *
         * @public
         * @readonly
         */
        readonly reserveGroup: OPTIONAL<BOOLEAN>,
        /**
         * @summary `propertyParms`.
         * @description
         *
         * Packaged properties that are stream-specific and meaningful between
         * MG and MGC (clause 7.1.7).
         *
         * @public
         * @readonly
         */
        readonly propertyParms: PropertyParm[],
        /**
         * @summary Extensions that are not recognized.
         * @description
         *
         * Extension additions this version does not define. Kept so a later
         * peer can still carry them (ITU-T Rec. H.248.1 (03/2013) clause 11.7).
         *
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a LocalControlDescriptor
     * @description
     * 
     * This takes an `object` and converts it to a `LocalControlDescriptor`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LocalControlDescriptor`.
     * @returns {LocalControlDescriptor}
     */
    public static _from_object (_o: { [_K in keyof (LocalControlDescriptor)]: (LocalControlDescriptor)[_K] }): LocalControlDescriptor {
        return new LocalControlDescriptor(_o.streamMode, _o.reserveValue, _o.reserveGroup, _o.propertyParms, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `streamMode`
         * @public
         * @static
         */

    public static _enum_for_streamMode = _enum_for_StreamMode;
}

/**
 * @summary The Leading Root Component Types of LocalControlDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LocalControlDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec("streamMode", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("reserveValue", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("reserveGroup", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("propertyParms", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of LocalControlDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LocalControlDescriptor: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LocalControlDescriptor
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LocalControlDescriptor: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LocalControlDescriptor: $.ASN1Decoder<LocalControlDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocalControlDescriptor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocalControlDescriptor (el: _Element): LocalControlDescriptor {
    if (!_cached_decoder_for_LocalControlDescriptor) { _cached_decoder_for_LocalControlDescriptor = function (el: _Element): LocalControlDescriptor {
    let streamMode: OPTIONAL<StreamMode>;
    let reserveValue: OPTIONAL<BOOLEAN>;
    let reserveGroup: OPTIONAL<BOOLEAN>;
    let propertyParms!: PropertyParm[];
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "streamMode": (_el: _Element): void => { streamMode = $._decode_implicit<StreamMode>(() => _decode_StreamMode)(_el); },
        "reserveValue": (_el: _Element): void => { reserveValue = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "reserveGroup": (_el: _Element): void => { reserveGroup = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "propertyParms": (_el: _Element): void => { propertyParms = $._decode_implicit<PropertyParm[]>(() => $._decodeSequenceOf<PropertyParm>(() => _decode_PropertyParm))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_LocalControlDescriptor,
        _extension_additions_list_spec_for_LocalControlDescriptor,
        _root_component_type_list_2_spec_for_LocalControlDescriptor,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new LocalControlDescriptor(
        streamMode,
        reserveValue,
        reserveGroup,
        propertyParms,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_LocalControlDescriptor(el);
}

let _cached_encoder_for_LocalControlDescriptor: $.ASN1Encoder<LocalControlDescriptor> | null = null;

/**
 * @summary Encodes a(n) LocalControlDescriptor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocalControlDescriptor, encoded as an ASN.1 Element.
 */
export
function _encode_LocalControlDescriptor (value: LocalControlDescriptor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocalControlDescriptor) { _cached_encoder_for_LocalControlDescriptor = function (value: LocalControlDescriptor, elGetter: $.ASN1Encoder<LocalControlDescriptor>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.streamMode === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_StreamMode, $.BER)(value.streamMode, $.BER)),
            /* IF_ABSENT  */ ((value.reserveValue === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.reserveValue, $.BER)),
            /* IF_ABSENT  */ ((value.reserveGroup === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.reserveGroup, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<PropertyParm>(() => _encode_PropertyParm, $.BER), $.BER)(value.propertyParms, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LocalControlDescriptor(value, elGetter);
}


/* eslint-enable */
