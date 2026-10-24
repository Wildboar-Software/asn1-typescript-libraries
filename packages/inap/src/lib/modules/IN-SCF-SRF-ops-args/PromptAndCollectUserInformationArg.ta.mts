/* eslint-disable */
import {
    type BOOLEAN,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CollectedInfo, _decode_CollectedInfo, _encode_CollectedInfo } from "../IN-SCF-SRF-datatypes/CollectedInfo.ta.mjs";
// export { CollectedInfo, _decode_CollectedInfo, _encode_CollectedInfo } from "../IN-SCF-SRF-datatypes/CollectedInfo.ta.mjs";
import { InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "../IN-SCF-SRF-datatypes/InformationToSend.ta.mjs";
// export { InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "../IN-SCF-SRF-datatypes/InformationToSend.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
import { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
// export { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-SSF-SCF-datatypes/CallSegmentID.ta.mjs";


/**
 * @summary PromptAndCollectUserInformationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PromptAndCollectUserInformationArg ::= SEQUENCE {
 *   collectedInfo              [0]  CollectedInfo,
 *   disconnectFromIPForbidden  [1]  BOOLEAN DEFAULT TRUE,
 *   informationToSend          [2]  InformationToSend OPTIONAL,
 *   extensions                 [3]  Extensions OPTIONAL,
 *   callSegmentID              [4]  CallSegmentID OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class PromptAndCollectUserInformationArg {
    /**
     * @summary `collectedInfo`.
     * @public
     * @readonly
     */
    readonly collectedInfo: CollectedInfo;
    /**
     * @summary `disconnectFromIPForbidden`.
     * @public
     * @readonly
     */
    readonly disconnectFromIPForbidden: OPTIONAL<BOOLEAN>;
    /**
     * @summary `informationToSend`.
     * @public
     * @readonly
     */
    readonly informationToSend: OPTIONAL<InformationToSend>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `callSegmentID`.
     * @public
     * @readonly
     */
    readonly callSegmentID: OPTIONAL<CallSegmentID>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        collectedInfo: CollectedInfo,
        disconnectFromIPForbidden?: OPTIONAL<BOOLEAN>,
        informationToSend?: OPTIONAL<InformationToSend>,
        extensions?: OPTIONAL<Extensions>,
        callSegmentID?: OPTIONAL<CallSegmentID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.collectedInfo = collectedInfo;
        this.disconnectFromIPForbidden = disconnectFromIPForbidden;
        this.informationToSend = informationToSend;
        this.extensions = extensions;
        this.callSegmentID = callSegmentID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a PromptAndCollectUserInformationArg
     * @description
     * 
     * This takes an `object` and converts it to a `PromptAndCollectUserInformationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PromptAndCollectUserInformationArg`.
     * @returns {PromptAndCollectUserInformationArg}
     */
    public static _from_object (_o: { [_K in keyof (PromptAndCollectUserInformationArg)]: (PromptAndCollectUserInformationArg)[_K] }): PromptAndCollectUserInformationArg {
        return new PromptAndCollectUserInformationArg(_o.collectedInfo, _o.disconnectFromIPForbidden, _o.informationToSend, _o.extensions, _o.callSegmentID, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `disconnectFromIPForbidden`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_disconnectFromIPForbidden () { return true; }
}

/**
 * @summary The Leading Root Component Types of PromptAndCollectUserInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PromptAndCollectUserInformationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("collectedInfo", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("disconnectFromIPForbidden", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("informationToSend", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("callSegmentID", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of PromptAndCollectUserInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PromptAndCollectUserInformationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PromptAndCollectUserInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PromptAndCollectUserInformationArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PromptAndCollectUserInformationArg: $.ASN1Decoder<PromptAndCollectUserInformationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PromptAndCollectUserInformationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PromptAndCollectUserInformationArg (el: _Element): PromptAndCollectUserInformationArg {
    if (!_cached_decoder_for_PromptAndCollectUserInformationArg) { _cached_decoder_for_PromptAndCollectUserInformationArg = function (el: _Element): PromptAndCollectUserInformationArg {
    let collectedInfo!: CollectedInfo;
    let disconnectFromIPForbidden: OPTIONAL<BOOLEAN> = PromptAndCollectUserInformationArg._default_value_for_disconnectFromIPForbidden;
    let informationToSend: OPTIONAL<InformationToSend>;
    let extensions: OPTIONAL<Extensions>;
    let callSegmentID: OPTIONAL<CallSegmentID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "collectedInfo": (_el: _Element): void => { collectedInfo = $._decode_explicit<CollectedInfo>(() => _decode_CollectedInfo)(_el); },
        "disconnectFromIPForbidden": (_el: _Element): void => { disconnectFromIPForbidden = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "informationToSend": (_el: _Element): void => { informationToSend = $._decode_explicit<InformationToSend>(() => _decode_InformationToSend)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "callSegmentID": (_el: _Element): void => { callSegmentID = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PromptAndCollectUserInformationArg,
        _extension_additions_list_spec_for_PromptAndCollectUserInformationArg,
        _root_component_type_list_2_spec_for_PromptAndCollectUserInformationArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PromptAndCollectUserInformationArg(
        collectedInfo,
        disconnectFromIPForbidden,
        informationToSend,
        extensions,
        callSegmentID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_PromptAndCollectUserInformationArg(el);
}

let _cached_encoder_for_PromptAndCollectUserInformationArg: $.ASN1Encoder<PromptAndCollectUserInformationArg> | null = null;

/**
 * @summary Encodes a(n) PromptAndCollectUserInformationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PromptAndCollectUserInformationArg, encoded as an ASN.1 Element.
 */
export
function _encode_PromptAndCollectUserInformationArg (value: PromptAndCollectUserInformationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PromptAndCollectUserInformationArg) { _cached_encoder_for_PromptAndCollectUserInformationArg = function (value: PromptAndCollectUserInformationArg, elGetter: $.ASN1Encoder<PromptAndCollectUserInformationArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_CollectedInfo, $.BER)(value.collectedInfo, $.BER);
    if (value.disconnectFromIPForbidden !== undefined && !$.deepEq(value.disconnectFromIPForbidden, PromptAndCollectUserInformationArg._default_value_for_disconnectFromIPForbidden)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 1, () => $._encodeBoolean, $.BER)(value.disconnectFromIPForbidden, $.BER);
    }
    if (value.informationToSend !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_InformationToSend, $.BER)(value.informationToSend, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.callSegmentID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PromptAndCollectUserInformationArg(value, elGetter);
}


/* eslint-enable */
